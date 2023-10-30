import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Tutorials')
export class TutorialsEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    published: string;

    @Column()
    createAt: string;

    @Column()
    updateAt: string;
}