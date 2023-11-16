import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCatalogoDto } from './dto/create-catalogo.dto';
import { UpdateCatalogoDto } from './dto/update-catalogo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Catalogo } from './entities/catalogo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CatalogoService {
  constructor(@InjectRepository(Catalogo) private CatalogoRepository: Repository<Catalogo>,
  
  ) {}

  async create(createCatalogoDto: CreateCatalogoDto) {
    const catalogo = await this.CatalogoRepository.create(createCatalogoDto);
    return this.CatalogoRepository.save(catalogo);
  }

 
  async findAllWithProductos() {
    return this.CatalogoRepository.find({ relations: ['productos'] });
  }
  
  async update(id: number, UpdateCatalogoProductoDto: UpdateCatalogoDto) {
    const catalogo_producto = await this.CatalogoRepository.findOne(
      {
        where:
        {
          id_Catalogo: id,
        },
      });

    if (!catalogo_producto) {
      return new HttpException('catalogo no exisitente', HttpStatus.NOT_FOUND);
    }

    const updateCatalogoProductoDto = Object.assign(catalogo_producto, UpdateCatalogoProductoDto);
    return this.CatalogoRepository.save(updateCatalogoProductoDto);
  }

  async remove(id: number) {
    const catalogo_producto = await this.CatalogoRepository.delete(id);
    if (!catalogo_producto) {
      return new HttpException('catalogo no exisitente', HttpStatus.NOT_FOUND);
    }
    return catalogo_producto;
  }

}
