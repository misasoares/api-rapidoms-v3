import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCheckRegisterDto {
  @IsString()
  @IsNotEmpty()
  accName: string;

  @IsString()
  @IsNotEmpty()
  bank: string;

  @IsString()
  @IsNotEmpty()
  agencyNumber: string;

  @IsString()
  @IsNotEmpty()
  payerName: string;

  @IsString()
  @IsNotEmpty()
  checkNumber: string;

  @IsString()
  @IsNotEmpty()
  payerPhone: string;

  @IsString()
  sendTo?: string;

  @IsString()
  @IsNotEmpty()
  dueDate: string;

  @IsString()
  @IsNotEmpty()
  value: string;

  @IsString()
  @IsNotEmpty()
  accNumber: string;
}
