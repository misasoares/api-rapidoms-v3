import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrderService {
  create(createOrderDto: CreateOrderDto, user: any) {
    console.log(createOrderDto, user);
    return 'This action adds a new order';
  }

  findAll() {
    return `This action returns all order`;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} order`;
  // }

  // update(id: number, updateOrderDto: UpdateOrderDto) {
  //   return `This action updates a #${id} order`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} order`;
  // }
}
