import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Nome é obrigatório.' })
  displayName: string;

  @IsEmail({}, { message: 'E-mail é obrigatório.' })
  @IsOptional()
  email?: string;

  @IsNotEmpty({ message: 'Senha é obrigatório.' })
  @IsOptional()
  password?: string;

  @IsString()
  phone: string;

  @IsString()
  role: string;

  @IsString()
  @IsOptional()
  address?: string;
}
