/* eslint-disable prettier/prettier */
import { Almacene } from 'src/almacenes/entities/almacene.entity';


import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity()
export class catalogo {
  @PrimaryGeneratedColumn()
  id_catalogo: number;

  @Column({ type: 'double' })
  Stock: number;

  @Column({ type: 'double' })
  Id_Producto: number;

  @Column({ type: 'double' })
  Id_Almacen: number;


  @ManyToMany(() => Almacene, (almacene) => almacene.catalogo)
  @JoinTable({
    name: 'catalogo_almacene',
    joinColumn: {
      name: 'catalogo_id',
      referencedColumnName: 'id_catalogo',
    },
    inverseJoinColumn: {
      name: 'almacene_id',
      referencedColumnName: 'id',
    },
  })
  almacenes: Almacene[];
}
