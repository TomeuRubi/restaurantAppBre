import { Controller, Post, Get, Body, UseGuards, Param } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { CreateTableDto } from '../tables/dto/create-table.dto';
import { TablesService } from '../tables/tables.service';


@Controller('tables')
export class TablesController {

    constructor(private svc: TablesService) {}
    
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('owner', 'admin')
    @Post()
    create(@Body() createRestaurantDto: CreateTableDto) {
        return this.svc.create(createRestaurantDto);
    }

    @Get(':restaurantId')
    findByRestaurant(@Param('restaurantId') restaurantId: string) {
        return this.svc.findByRestaurant(restaurantId);
    }
}