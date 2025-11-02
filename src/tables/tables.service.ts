import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';


@Injectable()
export class TablesService {
constructor(private prisma: PrismaService) {}


create(data: any) {
return this.prisma.table.create({ data });
}


findByRestaurant(restaurantId: string) {
return this.prisma.table.findMany({ where: { restaurantId } });
}
}