/* eslint-disable prettier/prettier */
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateCatalogoDto } from './dto/create-catalogo.dto';
//import { UpdateProductoDto } from './dto/update-catalogo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { catalogo } from './entities/catalogo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CatalogoService {
  constructor(
    @InjectRepository(catalogo)
    private catalogRepository: Repository<catalogo>,
  ) { }

  async create(catalogo: CreateCatalogoDto) {
    const existingCatalog = await this.catalogRepository.findOne({
      where: {
        Stock: catalogo.Stock,
      },
    });

    if (existingCatalog) {
      throw new HttpException('Catalogo existente', HttpStatus.CONFLICT);
    }

    const newCatalog = this.catalogRepository.create(catalogo);
    await this.catalogRepository.save(newCatalog);
  }

  findAll() {
    return this.catalogRepository.find();
  }

  async findOne(Stock: number) {
    const catalog = await this.catalogRepository.findOne({
      where: {
        Stock,
      },
    });

    if (!catalog) {
      return new HttpException('producto no exisitente', HttpStatus.NOT_FOUND);
    }
    return catalog;
  }

  // async update(id: number, updateProductoDto: UpdateProductoDto) {
  //   const Product = await this.productRepository.findOne({
  //     where: {
  //       id_producto: id,
  //     },
  //   });

  //   if (!Product) {
  //     return new HttpException('producto no exisitente', HttpStatus.NOT_FOUND);
  //   }

  //   const updateProduct = Object.assign(Product, updateProductoDto);
  //   return this.productRepository.save(updateProduct);
  // }

  async remove(id_catalogo: number) {
    const catalog = await this.catalogRepository.delete(id_catalogo);
    if (!catalog) {
      return new HttpException('catalogo no exisitente', HttpStatus.NOT_FOUND);
    }
    return catalog;
  }
}
