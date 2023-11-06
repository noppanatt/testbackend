import { Module } from '@nestjs/common';
import { DocumentRequestService } from './document-request.service';
import { DocumentRequestController } from './document-request.controller';

@Module({
  controllers: [DocumentRequestController],
  providers: [DocumentRequestService],
})
export class DocumentRequestModule {}
