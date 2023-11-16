import { Module } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import { productos } from './entities/producto.entity';


@Module({
  imports:[TypeOrmModule.forFeature([productos])],
  controllers: [ProductosController],
  providers: [ProductosService],
})
export class ProductosModule {}
