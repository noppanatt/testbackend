import { Column, Entity, PrimaryGeneratedColumn, OneToMany, PrimaryColumn } from 'typeorm';
import { MedicalRequest } from './medicalrequest.entity';
@Entity()
export class Documents{
    @PrimaryColumn('uuid')
    id: string

    @OneToMany(type => MedicalRequest, medicalrequest => medicalrequest.documents) 
    medicalrequest: MedicalRequest[];
}