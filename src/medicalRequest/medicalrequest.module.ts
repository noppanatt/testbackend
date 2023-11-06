import { Module } from '@nestjs/common';
import { MedicalRequestService } from './medicalrequest.service';
import { MedicalRequestController } from './medicalrequest.controller';

@Module({
  controllers: [MedicalRequestController],
  providers: [MedicalRequestService],
})
export class MedicalRequestModule {}
