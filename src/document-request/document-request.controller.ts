import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DocumentRequestService } from './document-request.service';
import { CreateDocumentRequestDto } from './dto/create-document-request.dto';
import { UpdateDocumentRequestDto } from './dto/update-document-request.dto';

@Controller('document-request')
export class DocumentRequestController {
  constructor(private readonly documentRequestService: DocumentRequestService) {}

  @Post()
  create(@Body() createDocumentRequestDto: CreateDocumentRequestDto) {
    return this.documentRequestService.create(createDocumentRequestDto);
  }

  @Get()
  findAll() {
    return this.documentRequestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.documentRequestService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDocumentRequestDto: UpdateDocumentRequestDto) {
    return this.documentRequestService.update(+id, updateDocumentRequestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.documentRequestService.remove(+id);
  }
}
