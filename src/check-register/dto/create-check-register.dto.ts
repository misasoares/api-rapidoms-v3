import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCheckRegisterDto {
  @IsString()
  @IsNotEmpty()
  accName: string;

  @IsString()
  @IsNotEmpty()
  bank: string;

  bankUid?: string | undefined;

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
  payerPhone?: string;

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
