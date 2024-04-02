import { Module } from '@nestjs/common';
import { CatalogoService } from './catalogo.service';
import { CatalogoController } from './catalogo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { catalogo } from './entities/catalogo.entity';



@Module({
  imports: [TypeOrmModule.forFeature([catalogo])],
  controllers: [CatalogoController],
  providers: [CatalogoService],
  exports: [CatalogoService]
})
export class CatalogoModule { }
