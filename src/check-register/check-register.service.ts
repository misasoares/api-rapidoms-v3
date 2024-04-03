import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCheckRegisterDto } from './dto/create-check-register.dto';

@Injectable()
export class CheckRegisterService {
  constructor(private prisma: PrismaService) {}
  async create(createCheckRegisterDto: CreateCheckRegisterDto) {
    let createAccountBank;
    let createBank;

    const findSomeAccBank = await this.prisma.accountBank.findUnique({
      where: {
        name: createCheckRegisterDto.accName,
      },
    });

    if (!findSomeAccBank) {
      createAccountBank = await this.prisma.accountBank.create({
        data: {
          name: createCheckRegisterDto.accName,
          Banks: {
            connectOrCreate: {
              where: {
                name: createCheckRegisterDto.bank,
              },
              create: {
                cpfOrCnpj: createCheckRegisterDto.cpfOrCnpj,
                name: createCheckRegisterDto.bank,
                accNumber: createCheckRegisterDto.accNumber,
                agencyNumber: createCheckRegisterDto.agencyNumber,
              },
            },
          },
        },
        select: {
          Banks: true,
          name: true,
        },
      });
    }

    const findBank = await this.prisma.banks.findUnique({
      where: {
        name: createCheckRegisterDto.bank,
      },
    });

    if (!findBank) {
      createBank = await this.prisma.banks.create({
        data: {
          cpfOrCnpj: createCheckRegisterDto.cpfOrCnpj,
          name: createCheckRegisterDto.bank,
          accNumber: createCheckRegisterDto.accNumber,
          agencyNumber: createCheckRegisterDto.agencyNumber,
          accountBankUid: findSomeAccBank
            ? findSomeAccBank.uid
            : createAccountBank.uid,
        },
      });
    }

    const findPayer = await this.prisma.checkPayers.findUnique({
      where: {
        name: createCheckRegisterDto.payerName,
      },
    });

    if (!findPayer) {
      await this.prisma.checkPayers.create({
        data: {
          name: createCheckRegisterDto.payerName,
          phone: createCheckRegisterDto.payerPhone,
        },
      });
    }

    const createCheck = await this.prisma.checkRegister.create({
      data: {
        accBankUid: findSomeAccBank
          ? findSomeAccBank.uid
          : createAccountBank.uid,
        banksUid: findBank ? findBank.uid : createBank.uid,
        checkNumber: createCheckRegisterDto.checkNumber,
        dueDate: createCheckRegisterDto.dueDate,
        payerName: createCheckRegisterDto.payerName,
        value: createCheckRegisterDto.value,
        payerPhone: createCheckRegisterDto.payerPhone,
        sendTo: createCheckRegisterDto.sendTo,
      },
      select: {
        uid: true,
        AccountBank: true,
        Bank: true,
        checkNumber: true,
        dueDate: true,
        payerName: true,
        payerPhone: true,
        value: true,
        sendTo: true,
      },
    });

    return createCheck;
  }

  async findAllChecks() {
    const findAll = await this.prisma.checkRegister.findMany({
      select: {
        uid: true,
        AccountBank: true,
        Bank: true,
        checkNumber: true,
        dueDate: true,
        payerName: true,
        payerPhone: true,
        value: true,
        sendTo: true,
      },
    });

    return findAll;
  }

  async findOneAccount(accName: string) {
    const findMany = await this.prisma.accountBank.findMany({
      where: {
        name: {
          contains: accName,
        },
      },
      select: {
        name: true,
        Banks: true,
      },
    });

    return findMany;
  }

  async findPayers(payer: string) {
    const findMany = await this.prisma.checkPayers.findMany({
      where: {
        name: {
          contains: payer,
        },
      },
      select: {
        uid: true,
        name: true,
        phone: true,
      },
    });

    return findMany;
  }

  //   update(id: number, updateCheckRegisterDto: UpdateCheckRegisterDto) {
  //     return `This action updates a #${id} checkRegister`;
  //   }

  //   remove(id: number) {
  //     return `This action removes a #${id} checkRegister`;
  //   }
}
