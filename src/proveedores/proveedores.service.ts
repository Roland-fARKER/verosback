import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProveedoreDto } from './dto/create-proveedore.dto';
import { UpdateProveedoreDto } from './dto/update-proveedore.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Proveedore } from './entities/proveedore.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProveedoresService {
  constructor(
   @InjectRepository(Proveedore) private provedoresRepository:Repository<Proveedore>    
  ){}

  async create(createProveedoreDto: CreateProveedoreDto) {
    const Proveedores = await this.provedoresRepository.findOne({
      where: {
        Nombre_Proveedor: createProveedoreDto.Nombre_Proveedor,
      },
    });

    if (Proveedores) {
      throw new HttpException('proveedor ya existente', HttpStatus.CONFLICT);
    }

    const New_provedor = this.provedoresRepository.create(createProveedoreDto);
    await this.provedoresRepository.save(New_provedor);
  }

  findAll() {
    return this.provedoresRepository.find();
  }

  async findOne(Nombre_Proveedor: string) {

    const product= await this.provedoresRepository.findOne({
      where:
      {
        Nombre_Proveedor,
      },
    });

    if(!product)
    {
      return new HttpException('proveedor no exisitente',HttpStatus.NOT_FOUND);
    } 
    return product;
  }

  async update(id: number, updateProductoDto:UpdateProveedoreDto ) {
    const Proveedore= await this.provedoresRepository.findOne(
      {
        where:
        {
         id_Proveedor:id,
        },
      });

      if(!Proveedore)
      {
        return new HttpException('proveedore no exisitente',HttpStatus.NOT_FOUND);
      }

      const UpdateProveedoreDto= Object.assign(Proveedore,updateProductoDto);
      return this.provedoresRepository.save(UpdateProveedoreDto);
  }

  async remove(id: number) {
    const proveedore = await this.provedoresRepository.delete(id);
    if(!proveedore)
    {
      return new HttpException('proveedore no exisitente',HttpStatus.NOT_FOUND);
    }
    return proveedore;    
  }
}
