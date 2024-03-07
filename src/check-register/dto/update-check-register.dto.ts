import { PartialType } from '@nestjs/mapped-types';
import { CreateCheckRegisterDto } from './create-check-register.dto';

export class UpdateCheckRegisterDto extends PartialType(CreateCheckRegisterDto) {}
