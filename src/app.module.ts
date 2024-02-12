import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { APP_PIPE } from '@nestjs/core';
import { ClassValidatorPipe } from './shared/pipes/validation.pipe';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { CarBrandModule } from './car-brand/car-brand.module';

@Module({
  imports: [UserModule, PrismaModule, ConfigModule.forRoot({ isGlobal: true }), CarBrandModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useClass: ClassValidatorPipe,
    },
  ],
})
export class AppModule {}
