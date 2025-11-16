import { Controller, Post, Get, Body, UseGuards, Request, Param } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateOrderDto } from './dto/create-order.dto';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { OrdersService } from './orders.service';


@Controller('orders')
export class OrdersController {

    constructor(private svc: OrdersService) {}
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('client', 'staff')
    @Post()
    create(@Body() createOrderDto: CreateOrderDto) {
        return this.svc.createOrder(createOrderDto);
    }


    @Get('table/:tableId')
    byTable(@Param('tableId') tableId: string) {
        return this.svc.findByTable(tableId);
    }
}