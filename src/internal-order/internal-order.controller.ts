import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { InternalOrderService } from './internal-order.service';

@Controller('internal-order')
export class InternalOrderController {
  constructor(private readonly internalOrderService: InternalOrderService) {}

  /*precisa de refatoração*/

  @Post()
  create(@Body() createInternalOrderDto: any) {
    return { message: 'Funcionalidade temporariamente desabilitada' };

    //return this.internalOrderService.create(createInternalOrderDto);
  }

  @Get()
  findAll() {
    return { message: 'Funcionalidade temporariamente desabilitada' };

    //return this.internalOrderService.findAll();
  }

  @Put()
  updateInteralOrder(@Body() data: any) {
    return { message: 'Funcionalidade temporariamente desabilitada' };
    //return this.internalOrderService.update(data);
  }
}
