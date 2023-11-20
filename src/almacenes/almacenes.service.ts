import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAlmaceneDto } from './dto/create-almacene.dto';
import { UpdateAlmaceneDto } from './dto/update-almacene.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Almacene } from './entities/almacene.entity';
import { Repository } from 'typeorm';
import { ProductosService } from 'src/productos/productos.service';

@Injectable()
export class AlmacenesService {
  productosRepository: any;
 

  constructor(@InjectRepository(Almacene)private AlmaceneRepository: Repository<Almacene>,
  private readonly productosService: ProductosService,){}
  
  async create(createAlmaceneDto: CreateAlmaceneDto) {
    try {
      // Obtén todos los productos
      const productos = await this.productosService.findAll();

      // Crea un nuevo almacén
      const nuevoAlmacen = this.AlmaceneRepository.create(createAlmaceneDto);
      const almacenGuardado = await this.AlmaceneRepository.save(nuevoAlmacen);

      // Devolver un objeto con la información del almacén y los productos
      return {
        id: almacenGuardado.id,
        nombre: almacenGuardado.nombre,
        productos: productos,
      };
    } catch (error) {
      // Manejar la excepción y devolver un error HTTP
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'Error al procesar la solicitud',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
  }
}

async findAll() {

  return this.AlmaceneRepository.find();
}
  findOne(id: number) {
    const Almacen= this.AlmaceneRepository.findOne({
      where:
      {
        id,
      },
    });

    if(!Almacen)
    {
      return new HttpException('Almacen no exisitente', HttpStatus.NOT_FOUND);
    }

    return Almacen;
  }

 async update(id: number, updateAlmaceneDto: UpdateAlmaceneDto) {
    const almacen = await this.AlmaceneRepository.findOne(
      {
        where:
        {
          id: id,
        },
      });

    if (!almacen) {
      return new HttpException('almacen no exisitente', HttpStatus.NOT_FOUND);
    }

    const updateAlmacen = Object.assign(almacen, UpdateAlmaceneDto);
    return this.AlmaceneRepository.save(updateAlmacen);
  }

  async remove(id: number) {
    const Almacen = await this.AlmaceneRepository.delete(id);
    if (!Almacen ) {
      return new HttpException('almacen no exisitente', HttpStatus.NOT_FOUND);
    }
    return Almacen ;
  }
}
