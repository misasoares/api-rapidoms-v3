import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { RemoveSpecialCharacters } from 'src/shared/utils/remove-special-characters.decorator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Nome obrigatório.' })
  name: string;

  @IsEmail({}, { message: 'E-mail obrigatório.' })
  @IsNotEmpty({ message: 'E-mail obrigatório.' })
  email: string;

  @IsString()
  @Transform(RemoveSpecialCharacters)
  document?: string;
}
