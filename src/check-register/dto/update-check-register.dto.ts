import { PartialType } from '@nestjs/mapped-types';
import { CreateCheckRegisterDto } from './create-check-register.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateCheckRegisterDto extends PartialType(
  CreateCheckRegisterDto,
) {
  @IsString()
  @IsNotEmpty()
  uid: string;
}
