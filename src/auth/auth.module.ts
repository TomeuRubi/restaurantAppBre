import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';


@Module({
imports: [
PassportModule,
JwtModule.registerAsync({
useFactory: () => ({
secret: process.env.JWT_SECRET || 'secretKey',
signOptions: { expiresIn: '7d' },
}),
}),
],
providers: [JwtStrategy],
exports: [JwtModule],
})
export class AuthModule {}