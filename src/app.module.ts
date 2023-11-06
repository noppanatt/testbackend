import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { MedicalRequestModule } from './medicalrequest/medicalrequest.module';
import { DocumentRequestModule } from './document-request/document-request.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: '1234',
      username: 'postgres',
      entities: [],
      database: 'bdms_rf_db',
      synchronize: true,
      logging: true,
    }),
    MedicalRequestModule,
    DocumentRequestModule, ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
