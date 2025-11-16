import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Request as ExpressRequest } from 'express';



@Controller('users')
export class UsersController {
    @UseGuards(JwtAuthGuard)
    @Get('me')
    getProfile(@Request() req: ExpressRequest) {
        return req.user;
    }
}