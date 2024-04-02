import { productos } from 'src/productos/entities/producto.entity';
import { catalogo } from 'src/catalogo/entities/catalogo.entity';
import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Almacene {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

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

    @ManyToMany(() => catalogo, (catalogo) => catalogo.almacenes)
    @JoinTable({
      name: 'Almacene_catalogo',
      joinColumn: {
        name: 'almacene_id',
        referencedColumnName: 'id',
      },
      inverseJoinColumn: {
        name: 'catalogo_id',
        referencedColumnName: 'id_catalogo',
      },
    })
    catalogo: catalogo[];
}
