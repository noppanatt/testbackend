import { PartialType } from '@nestjs/mapped-types';
import { CreateDocumentRequestDto } from './create-document-request.dto';

export class UpdateDocumentRequestDto extends PartialType(CreateDocumentRequestDto) {}
