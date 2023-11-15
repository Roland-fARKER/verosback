import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Categoria 
{
    @PrimaryGeneratedColumn()
    id_categoria:number;

    @Column()
    Nombre_Categoria:string;
}