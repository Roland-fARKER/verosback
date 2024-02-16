import { PartialType } from '@nestjs/mapped-types';
import { CreateProductoDto } from './create-producto.dto';


export class UpdateProductoDto extends PartialType(CreateProductoDto) {
    Nombre_Producto: string;
    Descripcion?: string;
    Precio_Compra?: number;
    Precio_venta?: number;
    Id_Categoria?: number;
    Id_Familia?: number;
    Id_Proveedor?: number;
}
