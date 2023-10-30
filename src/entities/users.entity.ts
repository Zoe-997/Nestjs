import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Users')
export class UsersEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    name: string;

    @Column()
    address: string;
}