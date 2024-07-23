import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { AppService } from './app.service';
import { CarBrandModule } from './car-brand/car-brand.module';
import { CarModelModule } from './car-model/car-model.module';
import { PrismaModule } from './prisma/prisma.module';
import { ClassValidatorPipe } from './shared/pipes/validation.pipe';
import { UserModule } from './user/user.module';
import { CheckRegisterModule } from './check-register/check-register.module';
import { InternalOrderModule } from './internal-order/internal-order.module';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { AuthModule } from './auth/auth.module';
import { CustomResponseInterceptor } from './shared/custom-response.interceptor';
import { AppController } from './app.controller';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    PrismaModule,
    ConfigModule.forRoot({ isGlobal: true }),
    CarBrandModule,
    CarModelModule,
    CheckRegisterModule,
    InternalOrderModule,
    CustomerModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useClass: ClassValidatorPipe,
    },
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: CustomResponseInterceptor,
    },
  ],
})
export class AppModule {}
