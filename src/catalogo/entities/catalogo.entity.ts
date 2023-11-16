import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Catalogo 
{
    @PrimaryGeneratedColumn()
    id_Catalogo:number;

    @Column({type:'varchar'})
    Nombre_Catalogo: string;


    @Column({type:'text'})
    Descripcion:string;
}
