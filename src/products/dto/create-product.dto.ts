import { IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  amper: string;

  @IsNumber()
  value: number;

  @IsNumber()
  cca: number;

  @IsNumber()
  warranty: number;

  @IsNumber()
  quantity: number;
}
