import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CustomerService {
  constructor(private prisma: PrismaService) {}
  async create(createCustomerDto: any) {
    const customer = await this.prisma.costumer.create({
      data: createCustomerDto,
    });

    return customer;
  }

  findAll() {
    return this.prisma.costumer.findMany({
      include: {
        internalOrder: {
          include: {
            productsInternalOrder: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} customer`;
  // }

  // update(id: number, updateCustomerDto: UpdateCustomerDto) {
  //   return `This action updates a #${id} customer`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} customer`;
  // }
}
