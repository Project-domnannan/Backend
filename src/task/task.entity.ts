import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Task {

    @PrimaryColumn('uuid')
    id:string

    @Column()
    title:string

    @Column()
    description:string

    @CreateDateColumn()
    created:Date
}