import { Controller, Post, Get, Body, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';


@Controller('restaurants')
export class RestaurantsController {
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('owner', 'admin')
    @Post()
    create(@Body() createRestaurantDto: CreateRestaurantDto) {
    return { message: 'Restaurante creado', data: createRestaurantDto };
    }
x


    @Post()
    create(@Body() body: any) {
    return this.svc.create(body);
    }


    @Get()
    list() {
    return this.svc.findAll();
    }


    @Get(':id')
    one(@Param('id') id: string) {
    return this.svc.findOne(id);
    }
}