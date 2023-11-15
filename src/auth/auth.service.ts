/* eslint-disable prettier/prettier */
import { LoginDto } from './dto/login.dto';
import { UsersService } from './../users/users.service';
import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import * as bcryptjs from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register ({ userName, name, admin, password }: RegisterDto) {
    const user = await this.usersService.findOneByuserName(userName);
    if (user) {
      throw new BadRequestException('El usuario ya existe en la base de datos');
    }
    return await this.usersService.create({
      userName,
      name,
      admin,
      password: await bcryptjs.hash(password, 10),
    });
  }

  async login({ userName, password }: LoginDto) {
    const user = await this.usersService.findOneByuserName(userName);

    if (!user) {
      throw new UnauthorizedException('El usuario no existe');
    }
    const isPasswordValid = await bcryptjs.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Contraseña incorrecta');
    }

    const payload = { userName: user.userName };
    const admin = user.admin

    const token = await this.jwtService.signAsync(payload);

    return {
      token,
      userName,
      admin
    };
  }
}
