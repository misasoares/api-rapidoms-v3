import { Body, Controller, Get, Post } from '@nestjs/common';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { OrderService } from './order.service';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  create(@Body() createOrderDto: any, @CurrentUser() user: any) {
    return this.orderService.create(createOrderDto, user);
  }

  @Get()
  findAll() {
    return this.orderService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.orderService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
  //   return this.orderService.update(+id, updateOrderDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.orderService.remove(+id);
  // }
}
