import { Body, Controller, Get, Post } from '@nestjs/common';
import { InternalOrderService } from './internal-order.service';

@Controller('internal-order')
export class InternalOrderController {
  constructor(private readonly internalOrderService: InternalOrderService) {}

  @Post()
  create(@Body() createInternalOrderDto: any) {
    return this.internalOrderService.create(createInternalOrderDto);
  }

  @Get()
  findAll() {
    return this.internalOrderService.findAll();
  }
}
