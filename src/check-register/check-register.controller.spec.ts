import { Test, TestingModule } from '@nestjs/testing';
import { CheckRegisterController } from './check-register.controller';
import { CheckRegisterService } from './check-register.service';

describe('CheckRegisterController', () => {
  let controller: CheckRegisterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CheckRegisterController],
      providers: [CheckRegisterService],
    }).compile();

    controller = module.get<CheckRegisterController>(CheckRegisterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
