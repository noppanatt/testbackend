import { PartialType } from '@nestjs/mapped-types';
import { CreateMedicalrequestDto } from './create-medicalrequest.dto';

export class UpdateMedicalrequestDto extends PartialType(CreateMedicalrequestDto) {}
