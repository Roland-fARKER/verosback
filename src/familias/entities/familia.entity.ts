import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Familia {
  @PrimaryGeneratedColumn()
  id_familia: number;

  @Column()
  Nombre_familia: string;
}
