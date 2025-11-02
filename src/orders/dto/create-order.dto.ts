import { IsNotEmpty, IsUUID, IsArray, ValidateNested, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';


export class OrderItemDto {
@IsUUID()
menuItemId: string;


@IsNumber()
quantity: number;
}


export class CreateOrderDto {
@IsUUID()
@IsNotEmpty()
tableId: string;


@IsArray()
@ValidateNested({ each: true })
@Type(() => OrderItemDto)
items: OrderItemDto[];
}