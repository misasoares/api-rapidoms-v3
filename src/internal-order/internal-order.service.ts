import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class InternalOrderService {
  constructor(private prisma: PrismaService) {}

  async create(createInternalOrder: any) {
    const {
      type,
      costumerName,
      cpfOrCnpj,
      phone,
      address,
      vehicles,
      products,
      totalValue,
      observations,
    } = createInternalOrder;

    const costumer = await this.prisma.costumer.upsert({
      where: {
        phone,
      },
      update: {
        name: costumerName,
        cpfOrCnpj,
        address,
        phone,
      },
      create: {
        name: costumerName,
        cpfOrCnpj,
        address,
        phone,
      },
    });

    const internalOrder = await this.prisma.internalOrder.create({
      data: {
        type,
        costumerUid: costumer.uid,
        vehicles,
        totalValue,
        observations,
      },
      include: {
        costumer: true,
      },
    });

    const productsCreatetoInternalOrder = await Promise.all(
      products.map(async (product) => {
        return await this.prisma.productsInternalOrder.create({
          data: {
            quantity: Number(product.quantity),
            description: product.description,
            unityValue: Number(product.unityValue),
            total: Number(product.total),
            internalOrderUid: internalOrder.uid,
          },
        });
      }),
    );

    return { ...internalOrder, products: productsCreatetoInternalOrder };
  }

  async findAll() {
    const findAll = await this.prisma.internalOrder.findMany({
      include: {
        costumer: true,
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
