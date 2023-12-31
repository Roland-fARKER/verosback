/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from './entities/categoria.entity';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Categoria)
    private CategoriaRepositiry: Repository<Categoria>,
  ) {}

  async create(CreateCategoriaDto: CreateCategoriaDto) {
    const existingProduct = await this.CategoriaRepositiry.findOne({
      where: {
        Nombre_Categoria: CreateCategoriaDto.Nombre_Categoria,
      },
    });

    if (existingProduct) {
      throw new HttpException('Categoria existente', HttpStatus.CONFLICT);
    }

    const New_Categoria = this.CategoriaRepositiry.create(CreateCategoriaDto);
    await this.CategoriaRepositiry.save(New_Categoria);
  }

  findAll() {
    return this.CategoriaRepositiry.find();
  }

  async findOne(Nombre_Categoria: string) {
    const categoria = await this.CategoriaRepositiry.findOne({
      where: {
        Nombre_Categoria,
      },
    });

    if (!categoria) {
      return new HttpException('categoria no exisitente', HttpStatus.NOT_FOUND);
    }

    return categoria;
  }

   
  async update(id: number, updateProduct:UpdateCategoriaDto ) {
    const Product = await this.CategoriaRepositiry.findOne({
      where: {
        id_categoria: id,
      },
    });

    if (!Product) {
      return new HttpException('Categoria no exisitente', HttpStatus.NOT_FOUND);
    }

    const NewupdateProduct = Object.assign(Product, updateProduct);
    return this.CategoriaRepositiry.save(NewupdateProduct);
  }

  async remove(id: number) {
    const categoria = await this.CategoriaRepositiry.delete(id);
    if (!categoria) {
      return new HttpException('Categoria no exisitente', HttpStatus.NOT_FOUND);
    }
    return categoria;
  }
}
