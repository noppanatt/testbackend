import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Documents } from './documents.entity';

@Entity()
export class MedicalRequest {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({type: 'varchar', length: 255})
    requester: string;

    @ManyToOne(type => Documents, document => document.medicalrequest) 
    documents: Documents;
}