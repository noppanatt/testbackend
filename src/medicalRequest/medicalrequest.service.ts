import { Injectable } from '@nestjs/common';
import { CreateMedicalrequestDto } from './dto/create-medicalrequest.dto';
import { UpdateMedicalrequestDto } from './dto/update-medicalrequest.dto';

@Injectable()
export class MedicalRequestService {
  create(createMedicalrequestDto: CreateMedicalrequestDto) {
    return 'This action adds a new medicalrequest';
  }

  findAll() {
    return `This action returns all medicalrequest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} medicalrequest`;
  }

  update(id: number, updateMedicalrequestDto: UpdateMedicalrequestDto) {
    return `This action updates a #${id} medicalrequest`;
  }

  remove(id: number) {
    return `This action removes a #${id} medicalrequest`;
  }
}
