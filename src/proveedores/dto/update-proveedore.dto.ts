/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/swagger';
import { CreateProveedoreDto } from './create-proveedore.dto';

export class UpdateProveedoreDto extends PartialType(CreateProveedoreDto) 
{
    nombre?:string;
    telefono?:number;
    estado?: boolean;
}
