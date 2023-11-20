import { PartialType } from '@nestjs/swagger';
import { CreateProveedoreDto } from './create-proveedore.dto';

export class UpdateProveedoreDto extends PartialType(CreateProveedoreDto) 
{
    Nombre_Proveedor:string;
    Num_Telefono:number;
}
