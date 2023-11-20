import { Module } from '@nestjs/common';
import { AlmacenesService } from './almacenes.service';
import { AlmacenesController } from './almacenes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Almacene } from './entities/almacene.entity';
import { ProductosModule } from 'src/productos/productos.module';

@Module({
  imports:[TypeOrmModule.forFeature([Almacene]),ProductosModule],
  controllers: [AlmacenesController],
  providers: [AlmacenesService],
  exports:[AlmacenesService]
})
export class AlmacenesModule {}
