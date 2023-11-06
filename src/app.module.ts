import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { MedicalRequestModule } from './medicalrequest/medicalrequest.module';
import { DocumentRequestModule } from './document-request/document-request.module';
import { dataSourceOptions } from './common/config/data-source';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    MedicalRequestModule,
    DocumentRequestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
