/* eslint-disable prettier/prettier */
import {HttpException, HttpStatus, Injectable, NotFoundException} from '@nestjs/common';
import { CreateAlmaceneDto } from './dto/create-almacene.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Almacene } from './entities/almacene.entity';
import { FindOneOptions, Repository } from 'typeorm';
import { UpdateAlmaceneDto } from './dto/update-almacene.dto';

@Injectable()
export class AlmaceneService {
  constructor(
    @InjectRepository(Almacene)
    private AlmaceneRepository: Repository<Almacene>,
  ) {}
  async create(createAlmaceneDto: CreateAlmaceneDto) {
    const Almaceneexistente = await this.AlmaceneRepository.findOne({
      where: {
        nombre: createAlmaceneDto.nombre,
      },
    });

    if (Almaceneexistente) {
      throw new HttpException('El Almacene ya existe', HttpStatus.CONFLICT);
    }

    const new_Almacene = this.AlmaceneRepository.create(createAlmaceneDto);
    await this.AlmaceneRepository.save(new_Almacene);
  }

  findAll() {
    return this.AlmaceneRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} Almacene`;
  }
  async update(id: number, updateAlmaceneDto: UpdateAlmaceneDto) {
    return await this.AlmaceneRepository.update(id, updateAlmaceneDto);
  }

  async remove(id: number): Promise<void> {
    const existingAlmacene = await this.AlmaceneRepository.findOne({
      where: { id },
    } as FindOneOptions<Almacene>);

    if (!existingAlmacene) {
      throw new NotFoundException(`Almacene with ID ${id} not found`);
    }

    await this.AlmaceneRepository.remove(existingAlmacene);
  }
}
