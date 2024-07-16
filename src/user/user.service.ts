import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async create(createUserDto: CreateUserDto) {
    const findUserByEmail = await this.findByEmail(createUserDto.email);

    if (findUserByEmail) {
      throw new BadRequestException('Usuário com esse email já existe.');
    }

    const user = await this.prisma.user.create({
      data: {
        name: createUserDto.displayName,
        email: createUserDto.email,
        password: await bcrypt.hash(createUserDto.password, 10),
      },
    });

    const findEmployeeRole = await this.prisma.role.findFirst({
      where: {
        name: 'employees',
      },
    });

    await this.prisma.user.update({
      where: {
        uid: user.uid,
      },
      data: {
        roles: {
          connect: {
            uid: findEmployeeRole.uid,
          },
        },
      },
    });

    return { ...user, password: undefined };
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
      include: { roles: true },
    });
  }

  async findByUid(userUid: string) {
    return await this.prisma.user.findUnique({
      where: {
        uid: userUid,
      },
      include: {
        roles: true,
      },
    });
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    console.log(updateUserDto);
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
