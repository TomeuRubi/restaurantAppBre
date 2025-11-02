import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import { OrdersService } from './orders.service';


@Controller('orders')
export class OrdersController {
constructor(private svc: OrdersService) {}


@Post()
create(@Body() body: any) {
return this.svc.createOrder(body);
}


@Get('table/:tableId')
byTable(@Param('tableId') tableId: string) {
return this.svc.findByTable(tableId);
}
}