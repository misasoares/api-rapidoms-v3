import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Nome é obrigatório.' })
  displayName: string;

  @IsEmail({}, { message: 'E-mail é obrigatório.' })
  @IsNotEmpty({ message: 'E-mail é obrigatório.' })
  email: string;

  @IsNotEmpty({ message: 'Senha é obrigatório.' })
  password: string;
}
