import { PartialType } from '@nestjs/swagger';
import { CreateCatalogoDto } from './create-catalogo.dto';

export class UpdateCatalogoDto extends PartialType(CreateCatalogoDto) 
{
  
    Nombre_Catalogo:string;
    Descripcion:string;
}
