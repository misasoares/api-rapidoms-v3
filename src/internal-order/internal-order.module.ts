import { Module } from '@nestjs/common';
import { InternalOrderController } from './internal-order.controller';
import { InternalOrderService } from './internal-order.service';

@Module({
  controllers: [InternalOrderController],
  providers: [InternalOrderService],
})
export class InternalOrderModule {}
