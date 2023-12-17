import { Module } from '@nestjs/common';
import { AlmaceneService } from './almacenes.service';
import { AlmaceneController } from './almacenes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Almacene } from './entities/almacene.entity';
import { ProductosModule } from 'src/productos/productos.module';

@Module({
  imports:[TypeOrmModule.forFeature([Almacene]),ProductosModule],
  controllers: [AlmaceneController],
  providers: [AlmaceneService],
  exports:[AlmaceneService]
})
export class AlmaceneModule {}
