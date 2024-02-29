import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCarModelDto } from './dto/create-car-model.dto';
import { UpdateCarModelDto } from './dto/update-car-model.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CarModelService {
  constructor(private prisma: PrismaService) {}
  async create(createCarModelDto: CreateCarModelDto) {
    const isThereThisCarModel = await this.prisma.carModel.findUnique({
      where: {
        name: createCarModelDto.name,
      },
    });

    if (isThereThisCarModel) {
      throw new BadRequestException('Esse modelo de carro já existe.');
    }

    const isThereThisCarBrand = await this.prisma.carBrand.findUnique({
      where: {
        uid: createCarModelDto.carBrandUid,
      },
    });

    if (!isThereThisCarBrand) {
      throw new BadRequestException('Essa montadora de carro não existe.');
    }

    const carModel = await this.prisma.carModel.create({
      data: {
        name: createCarModelDto.name,
        description: createCarModelDto.description,
        carBrandUid: createCarModelDto.carBrandUid,
        yearFabrication: createCarModelDto.yearFabrication,
      },
    });

    return carModel;
  }

  async findAll() {
    return await this.prisma.carModel.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.carModel.findUnique({
      where: {
        uid: id,
      },
    });
  }

  update(id: number, updateCarModelDto: UpdateCarModelDto) {
    console.log(updateCarModelDto);
    return `This action updates a #${id} carModel`;
  }

  remove(id: number) {
    return `This action removes a #${id} carModel`;
  }
}
