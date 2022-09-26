import { Column, Model, Table, CreatedAt, UpdatedAt, DataType } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @Column
  email: string;

  @Column
  password: string;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  role:number; 

  @Column
  dnisAccess:string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}