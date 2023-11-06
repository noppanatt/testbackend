import { Injectable } from '@nestjs/common';
import { CreateDocumentRequestDto } from './dto/create-document-request.dto';
import { UpdateDocumentRequestDto } from './dto/update-document-request.dto';

@Injectable()
export class DocumentRequestService {
  create(createDocumentRequestDto: CreateDocumentRequestDto) {
    return 'This action adds a new documentRequest';
  }

  findAll() {
    return `This action returns all documentRequest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} documentRequest`;
  }

  update(id: number, updateDocumentRequestDto: UpdateDocumentRequestDto) {
    return `This action updates a #${id} documentRequest`;
  }

  remove(id: number) {
    return `This action removes a #${id} documentRequest`;
  }
}
