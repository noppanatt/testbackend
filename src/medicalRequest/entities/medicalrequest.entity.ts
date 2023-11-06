import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, IntegerType } from 'typeorm';
import { RequesterType } from 'src/common/enum/requesteTyper.enum';
import { RequesterSpecify } from 'src/common/enum/requesterspecify.enum';
import { InsuranceCompany } from 'src/common/enum/insurancecompany.enum';
import { NotificationType } from 'src/common/enum/notificationType.enum';
import { ReceiveType } from 'src/common/enum/receiveType.enum';

@Entity()
export class MedicalRequest {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "int", length: 10, name: "request_number" })
    request_number: number;
    
    @Column({ type: "enum", enum: RequesterType, default: "patient"})
    requester_type: RequesterType;
    
    @Column({ type: "enum", enum: RequesterSpecify })
    requester_specify: RequesterSpecify;
    
    @Column({ type: "enum", enum: InsuranceCompany })
    requester_company: InsuranceCompany;
    
    @Column({ type: "varchar", length: 255})
    requester_detail: string;

    @Column({ type: "varchar", length: 255 })
    patient_firstname: string;

    @Column({ type: "varchar", length: 255 })
    patient_lastname: string;

    @Column({ type: "int", length: 13 })
    patient_citizen_id: number;

    @Column({ type: "date" })
    patient_date_of_birth: string;
    
    @Column({ type: "int", length: 10 })
    patient_phone_number: number;

    @Column({ type: "varchar", length: 50 })
    patient_email: string;

    @Column({ type: "boolean"})
    patient_died: boolean

    @Column({ type: "varchar", length: 255})
    requester_firstname: string

    @Column({ type: "varchar", length: 255})
    requester_lastname: string
    
    @Column({ type: "int", length: 13 })
    requester_citizen_id: number;

    @Column({ type: "int", length: 10 })
    requester_phone_number: number;

    @Column({ type: "varchar", length: 50 })
    requester_email: string;

    @Column({ type: "varchar", length: 50 })
    requester_passport_id: string;

    @Column({ type: "varchar", length: 255})
    objective: string

    @Column({ type: "enum", enum: ReceiveType})
    receive_type: ReceiveType

    @Column({ type: "enum", enum: NotificationType})
    notification_type: NotificationType

    @Column({ type: "varchar", length: 255})
    address: string

    @Column({ type: "varchar", length: 255})
    province: string

    @Column({ type: "varchar", length: 255})
    district: string

    @Column({ type: "varchar", length: 255})
    subdistrict: string
    
    @Column({ type: "int", length: 5})
    postcode: number

    // @ManyToOne(type => Documents, document => document.medicalrequest) 
    // documents: Documents;
}