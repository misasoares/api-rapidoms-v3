import { Module } from '@nestjs/common';
import { CheckRegisterService } from './check-register.service';
import { CheckRegisterController } from './check-register.controller';

@Module({
  controllers: [CheckRegisterController],
  providers: [CheckRegisterService],
})
export class CheckRegisterModule {}
