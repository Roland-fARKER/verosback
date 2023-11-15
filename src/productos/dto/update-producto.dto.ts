import { PartialType } from '@nestjs/mapped-types';
import { CreateProductoDto } from './create-producto.dto';

export class UpdateProductoDto extends PartialType(CreateProductoDto) {
    Nombre_Producto:string;
    Descripcion?:string;
    Stock?:number;
    Precio_Compra?:number;
    Precio_venta?:number;
    Precio_Unitario?:number;
}
