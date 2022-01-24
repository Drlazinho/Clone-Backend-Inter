import {
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
  Column,
  CreateDateColumn,
  ManyToOne,
  UpdateDateColumn,
} from 'typeorm';

import {User} from './User';

//Primeira unidade de Pix, que vai realizar as transações

@Entity()
export class Pix {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  status: string;

  //Relacionamento de negocio entre dois usuarios
  @ManyToOne(() => User, user => user.id)
  @JoinColumn()
  requestingUser: User;

  @ManyToOne(() => User, user => user.id, { nullable: true })
  @JoinColumn()
  payingUser: User;

  @Column()
  value: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
