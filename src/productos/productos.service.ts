/* eslint-disable prettier/prettier */
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { productos } from './entities/producto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(productos)
    private productRepository: Repository<productos>,
  ) {}

  async create(productos: CreateProductoDto) {
    const existingProduct = await this.productRepository.findOne({
      where: {
        Nombre_Producto: productos.Nombre_Producto,
      },
    });

    if (existingProduct) {
      throw new HttpException('Producto existente', HttpStatus.CONFLICT);
    }

    const newProduct = this.productRepository.create(productos);
    await this.productRepository.save(newProduct);
  }

  findAll() {
    return this.productRepository.find();
  }

  async findOne(Nombre_Producto: string) {
    const product = await this.productRepository.findOne({
      where: {
        Nombre_Producto,
      },
    });

    if (!product) {
      return new HttpException('producto no exisitente', HttpStatus.NOT_FOUND);
    }
    return product;
  }

  async update(id: number, updateProductoDto: UpdateProductoDto) {
    const Product = await this.productRepository.findOne({
      where: {
        id_producto: id,
      },
    });

    if (!Product) {
      return new HttpException('producto no exisitente', HttpStatus.NOT_FOUND);
    }

    const updateProduct = Object.assign(Product, updateProductoDto);
    return this.productRepository.save(updateProduct);
  }

  async remove(id: number) {
    const product = await this.productRepository.delete(id);
    if (!product) {
      return new HttpException('producto no exisitente', HttpStatus.NOT_FOUND);
    }
    return product;
  }
}
