import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCarModelDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  carBrandUid: string;

  @IsNumber()
  yearFabrication: number;
}
