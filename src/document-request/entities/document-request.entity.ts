import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class DocumentRequest {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "varchar", length: 255})
    detail: string

    @Column({ type: "date" })
    date: string;

    // relation
}
