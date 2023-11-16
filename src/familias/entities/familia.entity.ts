import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Familia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Nombre_familia: string;
}
