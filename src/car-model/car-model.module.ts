import { Module } from '@nestjs/common';
import { CarModelService } from './car-model.service';
import { CarModelController } from './car-model.controller';

@Module({
  controllers: [CarModelController],
  providers: [CarModelService],
})
export class CarModelModule {}
