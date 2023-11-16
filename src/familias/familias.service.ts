import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateFamiliaDto } from './dto/create-familia.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Familia } from './entities/familia.entity';
import { FindOneOptions, Repository } from 'typeorm';
import { UpdateFamiliaDto } from './dto/update-familia.dto';

@Injectable()
export class FamiliasService {
  constructor(
    @InjectRepository(Familia)
    private FamiliaRepository: Repository<Familia>,
  ) {}
  async create(createFamiliaDto: CreateFamiliaDto) {
    const familiaexistente = await this.FamiliaRepository.findOne({
      where: {
        Nombre_familia: createFamiliaDto.Nombre_familia,
      },
    });

    if (familiaexistente) {
      throw new HttpException('La familia ya existe', HttpStatus.CONFLICT);
    }

    const new_familia = this.FamiliaRepository.create(createFamiliaDto);
    await this.FamiliaRepository.save(new_familia);
  }

  findAll() {
    return this.FamiliaRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} familia`;
  }
  async update(id: number, updateFamiliaDto: UpdateFamiliaDto) {
    return await this.FamiliaRepository.update(id, updateFamiliaDto);
  }

  async remove(id: number): Promise<void> {
    const existingFamilia = await this.FamiliaRepository.findOne({
      where: { id },
    } as FindOneOptions<Familia>);

    if (!existingFamilia) {
      throw new NotFoundException(`Familia with ID ${id} not found`);
    }

    await this.FamiliaRepository.remove(existingFamilia);
  }
}
