import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    if (createUserDto.email) {
      const findUserByEmail = await this.findByEmail(createUserDto.email);

      if (findUserByEmail) {
        throw new BadRequestException('Já existe um usuário com esse email.');
      }
    }

    const findUserByPhone = await this.findByPhone(createUserDto.phone);

    if (findUserByPhone)
      throw new BadRequestException('Já existe um usuário com esse telefone.');

    const findRole = await this.prisma.role.findUnique({
      where: {
        name: createUserDto.role,
      },
    });

    if (!findRole)
      throw new BadRequestException('Não foi possível encontrar uma role.');

    const password = createUserDto.password
      ? await bcrypt.hash(createUserDto.password, 10)
      : null;

    const user = await this.prisma.user.create({
      data: {
        name: createUserDto.displayName,
        email: createUserDto.email,
        password,
        phone: createUserDto.phone,
        address: createUserDto.address,
        roles: {
          connect: {
            uid: findRole.uid,
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

  async findByPhone(phone: string) {
    return await this.prisma.user.findUnique({
      where: {
        phone,
      },
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
