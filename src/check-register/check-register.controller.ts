import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CheckRegisterService } from './check-register.service';
import { CreateCheckRegisterDto } from './dto/create-check-register.dto';
import { UpdateCheckRegisterDto } from './dto/update-check-register.dto';

@Controller('checks')
export class CheckRegisterController {
  constructor(private readonly checkRegisterService: CheckRegisterService) {}

  @Post()
  create(@Body() createCheckRegisterDto: CreateCheckRegisterDto) {
    return this.checkRegisterService.create(createCheckRegisterDto);
  }

  @Get()
  findAll() {
    return this.checkRegisterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.checkRegisterService.findOne(+id);
  }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateCheckRegisterDto: UpdateCheckRegisterDto,
  // ) {
  //   return this.checkRegisterService.update(+id, updateCheckRegisterDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.checkRegisterService.remove(+id);
  // }
}
