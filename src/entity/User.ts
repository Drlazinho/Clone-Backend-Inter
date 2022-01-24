import {Entity, PrimaryGeneratedColumn, Column, } from 'typeorm'

//Primeira unidade de Pix, que vai realizar as transações

@Entity()
export class User{

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  accountNumber: number;

  @Column()
  accountDigit: number;

  @Column()
  wallet: number;

  @Column()
  email: string;

  @Column()
  password: string;
}