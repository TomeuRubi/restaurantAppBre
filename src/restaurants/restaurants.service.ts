import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';


@Injectable()
export class RestaurantsService {
constructor(private prisma: PrismaService) {}


create(data: any) {
return this.prisma.restaurant.create({ data });
}


findAll() {
return this.prisma.restaurant.findMany();
}


findOne(id: string) {
return this.prisma.restaurant.findUnique({ where: { id } });
}
}