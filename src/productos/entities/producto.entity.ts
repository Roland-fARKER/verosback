
import{Entity , Column , PrimaryGeneratedColumn, JoinColumn, ManyToOne} from 'typeorm';

@Entity()
export class productos
{
    @PrimaryGeneratedColumn()
    id_producto:number;

    @Column()
    Nombre_Producto:string

    @Column()
    Descripcion:string

    @Column({type:'bool'})
    Estado:boolean

    @Column({type:'int'})
    Stock:number

    @Column({type:'double'})
    Precio_Compra:number

    @Column({type:'double'})
    Precio_venta:number

    @Column({type:'double'})
    Precio_Unitario:number


}