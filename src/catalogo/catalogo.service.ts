import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCatalogoDto } from './dto/create-catalogo.dto';
import { UpdateCatalogoDto } from './dto/update-catalogo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Catalogo } from './entities/catalogo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CatalogoService {
  constructor(@InjectRepository(Catalogo)  private CatalogoRepositiry: Repository<Catalogo>,){}
  
  async create(createCatalogoDto: CreateCatalogoDto) {
    const catalogo= await this.CatalogoRepositiry.create(createCatalogoDto);
    return this.CatalogoRepositiry.save(catalogo);
  }

  findAll() {
    return this.CatalogoRepositiry.find();
  }

 async findOne(Nombre_Catalogo: string) {
    const Catalogo = await this.CatalogoRepositiry.findOne({
      where: {
        Nombre_Catalogo,
      },
    });

    if (!Catalogo) {
      return new HttpException('catalogo no exisitente', HttpStatus.NOT_FOUND);
    }

    return Catalogo;
  }

 
}
