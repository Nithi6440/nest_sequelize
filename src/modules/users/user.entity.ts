import { Table, Column, Model, DataType, PrimaryKey } from 'sequelize-typescript';
// อันนี้คือ model นะ entity ไม่มี config ข้างใน มีแต่ชื่อ Field
@Table
export class User extends Model<User> {
    
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    email: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    password: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    gender: string;
}