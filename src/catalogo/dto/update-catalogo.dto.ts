import { PartialType } from '@nestjs/mapped-types';
import { CreateCatalogoDto } from './create-catalogo.dto';


export class UpdateProductoDto extends PartialType(CreateCatalogoDto) {
    Stock?: number;
    Id_Producto?: number;
    Id_Almacen?: number;
}
