import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Proveedore 
{
    @PrimaryGeneratedColumn()
    id_Proveedor:number;

    @Column({type:'varchar'})
    Nombre_Proveedor:string;

    @Column({type:'bool'})
    Estado:boolean;

    @Column({type:'int'})
    Num_Telefono:number;

    
}
