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
        admin: false,
      },
    });
    return { ...user, password: undefined };
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
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
