import { productos } from "src/productos/entities/producto.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Catalogo 
{
    @PrimaryGeneratedColumn()
    id_Catalogo:number;

    @Column({type:'varchar'})
    Nombre_Catalogo: string;


    @Column({type:'text'})
    Descripcion:string;

  
    @OneToMany(() => productos, producto => producto.catalogo)
    productos: productos[];

}
