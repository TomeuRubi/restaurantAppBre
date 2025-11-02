import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';


@Injectable()
export class OrdersService {
constructor(private prisma: PrismaService) {}


async createOrder(payload: any) {
// payload: { tableId, restaurantId, items: [{menuItemId, quantity, notes}] }
const { tableId, restaurantId, items } = payload;


const order = await this.prisma.order.create({
data: {
tableId,
restaurantId,
status: 'pending',
items: {
create: items.map(i => ({ menuItemId: i.menuItemId, quantity: i.quantity, price: i.price || 0, notes: i.notes }))
}
},
include: { items: true }
});


// calculate total
const total = order.items.reduce((s, it) => s + it.price * it.quantity, 0);
await this.prisma.order.update({ where: { id: order.id }, data: { totalAmount: total } });


return { ...order, totalAmount: total };
}


findByTable(tableId: string) {
return this.prisma.order.findMany({ where: { tableId }, include: { items: true, payment: true } });
}
}