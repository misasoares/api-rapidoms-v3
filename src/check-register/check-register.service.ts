import { Injectable } from '@nestjs/common';
import { CreateCheckRegisterDto } from './dto/create-check-register.dto';
import { UpdateCheckRegisterDto } from './dto/update-check-register.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CheckRegisterService {
  constructor(private prisma: PrismaService) {}
  async create(createCheckRegisterDto: CreateCheckRegisterDto) {
    const response = await this.prisma.checkRegister.create({
      data: createCheckRegisterDto,
    });

    return response;
  }

  findAll() {
    return `This action returns all checkRegister`;
  }

  findOne(id: number) {
    return `This action returns a #${id} checkRegister`;
  }

  //   update(id: number, updateCheckRegisterDto: UpdateCheckRegisterDto) {
  //     return `This action updates a #${id} checkRegister`;
  //   }

  //   remove(id: number) {
  //     return `This action removes a #${id} checkRegister`;
  //   }
}
