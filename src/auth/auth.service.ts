import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';


@Injectable()
export class AuthService {
constructor(private prisma: PrismaService) {}


async login(email: string, password: string) {
const user = await this.prisma.user.findUnique({ where: { email } });
if (!user) return null;
const ok = await bcrypt.compare(password, user.passwordHash);
if (!ok) return null;
const token = jwt.sign({ sub: user.id, role: user.role }, process.env.JWT_SECRET || 'secret', { expiresIn: '8h' });
return { token, user };
}


async register(data: any) {
const hashed = await bcrypt.hash(data.password, 10);
return this.prisma.user.create({ data: { name: data.name, email: data.email, passwordHash: hashed, role: data.role || 'staff', restaurantId: data.restaurantId } });
}
}