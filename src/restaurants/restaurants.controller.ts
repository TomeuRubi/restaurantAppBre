import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';


@Controller('restaurants')
export class RestaurantsController {
constructor(private svc: RestaurantsService) {}


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