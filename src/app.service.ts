/* eslint-disable prettier/prettier */
import { Get, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  @Get()
  getHello(): string {
    return 'Bienvenido a la api de veros express';
  }
}
