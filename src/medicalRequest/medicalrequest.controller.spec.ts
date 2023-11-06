import { Test, TestingModule } from '@nestjs/testing';
import { MedicalRequestController } from './medicalrequest.controller';
import { MedicalRequestService } from './medicalrequest.service';

describe('MedicalRequestController', () => {
  let controller: MedicalRequestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedicalRequestController],
      providers: [MedicalRequestService],
    }).compile();

    controller = module.get<MedicalRequestController>(MedicalRequestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
