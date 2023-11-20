import { productos } from 'src/productos/entities/producto.entity';
import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Almacene {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar' })
    nombre: String;

    @ManyToMany(() => productos, (productos) => productos.almacenes)
    @JoinTable({
      name: 'Almacene_Productos',
      joinColumn: {
        name: 'almacene_id',
        referencedColumnName: 'id',
      },
      inverseJoinColumn: {
        name: 'producto_id',
        referencedColumnName: 'id_producto',
      },
    })
    productos: productos[];
}
