import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column()
    username:string

    @Column()
    password:string

    @CreateDateColumn()
    created: Date

    @UpdateDateColumn()
    updated: Date
}