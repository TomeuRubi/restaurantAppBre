import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateOrderDto } from './dto/create-order.dto';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';


@Controller('orders')
export class OrdersController {
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('client', 'staff')
    @Post()
    create(@Body() createOrderDto: CreateOrderDto, @Request() req) {
        const user = req.user;
        return { message: 'Pedido creado', user, createOrderDto };
    }


    @Post()
    create(@Body() body: any) {
        return this.svc.createOrder(body);
    }


    @Get('table/:tableId')
    byTable(@Param('tableId') tableId: string) {
        return this.svc.findByTable(tableId);
    }
}