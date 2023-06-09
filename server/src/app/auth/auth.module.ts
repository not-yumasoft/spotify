import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtModuleAsyncOptions } from '../../configs/jwt.config';
import { PassportModule } from '@nestjs/passport';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { AuthController } from './auth.controller';
import { RolesGuard } from './guards/roles.guard';
import { EnvironmentModule } from '../global/environment/environment.module';
import { CryptographyModule } from '../cryptography/cryptography.module';

@Module({
  imports: [
    EnvironmentModule,
    UserModule,
    JwtModule.registerAsync(jwtModuleAsyncOptions),
    PassportModule,
    CryptographyModule,
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AuthModule {}
