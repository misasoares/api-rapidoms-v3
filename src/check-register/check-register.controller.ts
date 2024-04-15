import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
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
  findAllChecks() {
    return this.checkRegisterService.findAllChecks();
  }

  @Get(':accName')
  findOneAccount(@Param('accName') accName: string) {
    return this.checkRegisterService.findOneAccount(accName);
  }

  @Get('payers/:payerName')
  findPayers(@Param('payerName') payer: string) {
    return this.checkRegisterService.findPayers(payer);
  }

  @Put(':uid')
  update(
    @Param('uid') uid: string,
    @Body() updateCheckRegisterDto: UpdateCheckRegisterDto,
  ) {
    return this.checkRegisterService.update(uid, updateCheckRegisterDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.checkRegisterService.remove(+id);
  // }
}
