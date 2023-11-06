import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MedicalRequestService } from './medicalrequest.service';
import { CreateMedicalrequestDto } from './dto/create-medicalrequest.dto';
import { UpdateMedicalrequestDto } from './dto/update-medicalrequest.dto';

@Controller('medicalrequest')
export class MedicalRequestController {
  constructor(private readonly medicalrequestService: MedicalRequestService) {}

  @Post()
  create(@Body() createMedicalrequestDto: CreateMedicalrequestDto) {
    return this.medicalrequestService.create(createMedicalrequestDto);
  }

  @Get()
  findAll() {
    return this.medicalrequestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medicalrequestService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMedicalrequestDto: UpdateMedicalrequestDto) {
    return this.medicalrequestService.update(+id, updateMedicalrequestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medicalrequestService.remove(+id);
  }
}
