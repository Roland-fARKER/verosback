/* eslint-disable prettier/prettier */
import { Almacene } from 'src/almacenes/entities/almacene.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity()
export class productos {
  @PrimaryGeneratedColumn()
  id_producto: number;

  @Column()
  Nombre_Producto: string;

  @Column()
  Descripcion: string;

  @Column({ type: 'double' })
  Precio_Compra: number;

  @Column({ type: 'double' })
  Precio_venta: number;

  @Column({ type: 'double' })
  Id_Categoria: number;

  @Column({ type: 'double' })
  Id_Familia: number;

  @Column({ type: 'double' })
  Id_Proveedor: number;

  @ManyToMany(() => Almacene, (almacene) => almacene.productos)
  @JoinTable({
    name: 'producto_almacene',
    joinColumn: {
      name: 'producto_id',
      referencedColumnName: 'id_producto',
    },
    inverseJoinColumn: {
      name: 'almacene_id',
      referencedColumnName: 'id',
    },
  })
  almacenes: Almacene[];
}
