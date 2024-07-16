import { Body, Controller, Get, Post, Put } from '@nestjs/common';
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

  @Put()
  updateInteralOrder(@Body() data: any) {
    return this.internalOrderService.update(data);
  }
}
