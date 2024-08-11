import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class InternalOrderService {
  constructor(private prisma: PrismaService) {}

  // async create(createInternalOrder: any) {
  //   const {
  //     type,
  //     costumerName,
  //     cpfOrCnpj,
  //     phone,
  //     address,
  //     vehicles,
  //     products,
  //     totalValue,
  //     observations,
  //     status,
  //     orderNumber,
  //   } = createInternalOrder;

  //   const costumer = await this.prisma.costumer.upsert({
  //     where: {
  //       phone,
  //     },
  //     update: {
  //       name: costumerName,
  //       cpfOrCnpj,
  //       address,
  //       phone,
  //     },
  //     create: {
  //       name: costumerName,
  //       cpfOrCnpj,
  //       address,
  //       phone,
  //     },
  //   });

  //   const internalOrder = await this.prisma.internalOrder.create({
  //     data: {
  //       type,
  //       costumerUid: costumer.uid,
  //       vehicles,
  //       orderNumber,
  //       totalValue,
  //       observations,
  //       status,
  //     },
  //     include: {
  //       costumer: true,
  //     },
  //   });

  //   const productsCreatetoInternalOrder = await Promise.all(
  //     products.map(async (product) => {
  //       const total = Number(product.quantity) * Number(product.unityValue);
  //       return await this.prisma.productsInternalOrder.create({
  //         data: {
  //           quantity: Number(product.quantity),
  //           description: product.description,
  //           unityValue: Number(product.unityValue),
  //           discount: Number(product.discount),
  //           total: Number(total),
  //           internalOrderUid: internalOrder.uid,
  //         },
  //       });
  //     }),
  //   );

  //   return { ...internalOrder, products: productsCreatetoInternalOrder };
  // }

  // async findAll() {
  //   const findAll = await this.prisma.internalOrder.findMany({
  //     include: {
  //       costumer: true,
  //       productsInternalOrder: true,
  //     },
  //     orderBy: [{ createdAt: 'desc' }],
  //   });

  //   const formatted = findAll.map((item) => ({
  //     ...item,
  //     products: item.productsInternalOrder,
  //   }));

  //   return formatted;
  // }

  // async update(updateInternalOrder: any) {
  //   const {
  //     uid,
  //     type,
  //     costumerName,
  //     cpfOrCnpj,
  //     phone,
  //     address,
  //     vehicles,
  //     products,
  //     totalValue,
  //     observations,
  //     status,
  //     orderNumber,
  //   } = updateInternalOrder;

  //   const costumer = await this.prisma.costumer.upsert({
  //     where: {
  //       phone,
  //     },
  //     update: {
  //       name: costumerName,
  //       cpfOrCnpj,
  //       address,
  //       phone,
  //     },
  //     create: {
  //       name: costumerName,
  //       cpfOrCnpj,
  //       address,
  //       phone,
  //     },
  //   });

  //   const internalOrder = await this.prisma.internalOrder.update({
  //     where: {
  //       uid,
  //     },
  //     data: {
  //       type,
  //       costumerUid: costumer.uid,
  //       vehicles,
  //       orderNumber,
  //       totalValue,
  //       observations,
  //       status,
  //     },
  //     include: {
  //       costumer: true,
  //       productsInternalOrder: true,
  //     },
  //   });

  //   await this.prisma.productsInternalOrder.deleteMany({
  //     where: {
  //       internalOrderUid: uid,
  //     },
  //   });

  //   const createdProducts = await Promise.all(
  //     products.map(async (product) => {
  //       const total = Number(product.quantity) * Number(product.unityValue);
  //       return await this.prisma.productsInternalOrder.create({
  //         data: {
  //           quantity: Number(product.quantity),
  //           description: product.description,
  //           unityValue: Number(product.unityValue),
  //           total: Number(total),
  //           internalOrderUid: uid,
  //         },
  //       });
  //     }),
  //   );

  //   return { ...internalOrder, products: createdProducts };
  // }
}
