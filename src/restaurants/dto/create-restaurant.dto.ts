import { IsNotEmpty, IsString, IsEmail, IsOptional } from 'class-validator';


export class CreateRestaurantDto {
@IsString()
@IsNotEmpty()
name: string | undefined;


@IsString()
@IsOptional()
address?: string;


@IsEmail()
@IsOptional()
email?: string;


@IsString()
@IsOptional()
phone?: string;
}