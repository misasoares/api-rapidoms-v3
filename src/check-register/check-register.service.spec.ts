import { Test, TestingModule } from '@nestjs/testing';
import { CheckRegisterService } from './check-register.service';

describe('CheckRegisterService', () => {
  let service: CheckRegisterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CheckRegisterService],
    }).compile();

    service = module.get<CheckRegisterService>(CheckRegisterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
