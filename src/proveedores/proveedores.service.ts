/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProveedoreDto } from './dto/create-proveedore.dto';
import { UpdateProveedoreDto } from './dto/update-proveedore.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Proveedore } from './entities/proveedore.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProveedoresService {
  constructor(
    @InjectRepository(Proveedore)
    private provedoresRepository: Repository<Proveedore>,
  ) {}

  async create(createProveedoreDto: CreateProveedoreDto) {
    const { nombre, estado,telefono } = createProveedoreDto;
    // Realizar validaciones según tus requisitos
    if (typeof nombre !== 'string' || !nombre.trim()) {
      throw new HttpException(
        'Nombre_Proveedor debe ser una cadena no vacía',
        HttpStatus.BAD_REQUEST,
      );
    }
    if (typeof estado !== 'boolean') {
      throw new HttpException(
        'Estado debe ser un valor booleano',
        HttpStatus.BAD_REQUEST,
      );
    }
    if (typeof telefono !== 'number' || isNaN(telefono)) {
      throw new HttpException(
        'Num_Telefono debe ser un número',
        HttpStatus.BAD_REQUEST,
      );
    }

    const proveedorExistente = await this.provedoresRepository.findOne({
      where: {
        nombre,
      },
    });

    if (proveedorExistente) {
      throw new HttpException('Proveedor ya existente', HttpStatus.CONFLICT);
    }
  
    const nuevoProveedor =
      this.provedoresRepository.create(createProveedoreDto);
    await this.provedoresRepository.save(nuevoProveedor);

    return nuevoProveedor;
  }

  findAll() {
    return this.provedoresRepository.find();
  }

  async findOne(nombre: string) {
    const product = await this.provedoresRepository.findOne({
      where: {
        nombre,
      },
    });

    if (!product) {
      return new HttpException('proveedor no exisitente', HttpStatus.NOT_FOUND);
    }
    return product;
  }

  async update(id: number, updateProductoDto: UpdateProveedoreDto) {
    const Proveedore = await this.provedoresRepository.findOne({
      where: {
        id: id,
      },
    });

    if (!Proveedore) {
      return new HttpException(
        'proveedore no exisitente',
        HttpStatus.NOT_FOUND,
      );
    }

    const UpdateProveedoreDto = Object.assign(Proveedore, updateProductoDto);
    return this.provedoresRepository.save(UpdateProveedoreDto);
  }

  async remove(id: number) {
    const proveedore = await this.provedoresRepository.delete(id);
    if (!proveedore) {
      return new HttpException(
        'proveedore no exisitente',
        HttpStatus.NOT_FOUND,
      );
    }
    return proveedore;
  }
}
