import { Controller, Post, Get, Body, UseGuards, Param } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { RestaurantsService } from './restaurants.service';


@Controller('restaurants')
export class RestaurantsController {

    constructor(private svc: RestaurantsService) {}
    
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('owner', 'admin')
    @Post()
    create(@Body() createRestaurantDto: CreateRestaurantDto) {
        return this.svc.create(createRestaurantDto);
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