import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity();
export class User {
    @PrimaryGeneratedColumn()
    user_id: number;

    @Column()
    name: string;

    @Email()
    email: string;
}
