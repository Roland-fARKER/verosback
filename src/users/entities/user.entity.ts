/* eslint-disable prettier/prettier */
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true, nullable: false })
  userName: string;

  @Column({ nullable: false })
  password: string;

  @Column()
  admin: boolean
}


//me tiene echo verga angulatr