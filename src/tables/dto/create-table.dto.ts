import { IsNotEmpty, IsUUID, IsArray, ValidateNested, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';


export class CreateTableDto {
    @IsUUID()
    @IsNotEmpty()
    tableId!: string;

    @IsNumber()
    number!: number;

    @IsNumber()
    restaurantId!: number;
}