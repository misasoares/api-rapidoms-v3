import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCarBrandDto } from './dto/create-car-brand.dto';
import { UpdateCarBrandDto } from './dto/update-car-brand.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CarBrandService {
  constructor(private prisma: PrismaService) {}
  async create(createCarBrandDto: CreateCarBrandDto) {
    const isThereThisCarBrand = await this.prisma.carBrand.findUnique({
      where: {
        name: createCarBrandDto.name,
      },
    });

    if (isThereThisCarBrand) {
      throw new BadRequestException('Essa marca de carro já existe.');
    }

    const carBrand = await this.prisma.carBrand.create({
      data: {
        name: createCarBrandDto.name,
      },
    });
    return carBrand;
  }

  findAll() {
    return `This action returns all carBrand`;
  }

  findOne(id: number) {
    return `This action returns a #${id} carBrand`;
  }

  update(id: number, updateCarBrandDto: UpdateCarBrandDto) {
    console.log(updateCarBrandDto);
    return `This action updates a #${id} carBrand`;
  }

  remove(id: number) {
    return `This action removes a #${id} carBrand`;
  }
}
