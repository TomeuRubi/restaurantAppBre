import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';


@Injectable()
export class AuthService {
constructor(
private readonly jwtService: JwtService,
private readonly prisma: PrismaService,
) {}


async validateUser(email: string, password: string) {
const user = await this.prisma.user.findUnique({ where: { email } });
if (!user) throw new UnauthorizedException('Usuario no encontrado');


const valid = await bcrypt.compare(password, user.passwordHash);
if (!valid) throw new UnauthorizedException('Credenciales incorrectas');


return user;
}


async login(user: any) {
const payload = { email: user.email, sub: user.id, role: user.role };
return {
access_token: this.jwtService.sign(payload),
user: { id: user.id, email: user.email, name: user.name, role: user.role },
};
}


async signup(data: { name: string; email: string; password: string; role?: string }) {
const hashed = await bcrypt.hash(data.password, 10);
const user = await this.prisma.user.create({
data: {
name: data.name,
email: data.email,
passwordHash: hashed,
role: data.role || 'client',
},
});
return this.login(user);
}
}