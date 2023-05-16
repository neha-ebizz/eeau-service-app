import { Module } from '@nestjs/common';
import { UsersModule } from 'src/entities/users/users.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: process.env.JSON_WEB_TOKEN_SECRET_KEY,
      // signOptions: { expiresIn: '60d' },
    }),
  ],
  providers: [],
  controllers: [],
  exports: [],
})
export class AuthModule {}
