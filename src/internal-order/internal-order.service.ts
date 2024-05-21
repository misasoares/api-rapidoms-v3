import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class InternalOrderService {
  constructor(private prisma: PrismaService) {}

  async create(createInternalOrder: any) {
    const { type, costumer, phone, address, vehicles, products, totalValue } =
      createInternalOrder;
    console.log(createInternalOrder);
    const create = await this.prisma.internalOrder.create({
      data: {
        type,
        costumer,
        phone,
        address,
        vehicles,
        totalValue,
      },
    });

    const productsCreatetoInternalOrder = products.map(async (product) => {
      return await this.prisma.productsInternalOrder.create({
        data: {
          quantity: Number(product.quantity),
          description: product.description,
          unityValue: Number(product.unityValue),
          total: Number(product.total),
          internalOrderUid: create.uid,
        },
      });
    });

    return { ...create, products: productsCreatetoInternalOrder };
  }

  async findAll() {
    const findAll = await this.prisma.internalOrder.findMany({
      include: {
        productsInternalOrder: true,
      },
    });

    const formatted = findAll.map((item) => ({
      ...item,
      products: item.productsInternalOrder,
    }));

    return formatted;
  }
}
