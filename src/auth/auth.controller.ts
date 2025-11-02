import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

class LoginDto {
    @IsEmail()
    email: string;


    @IsString()
    @MinLength(6)
    password: string;
    }


    class SignupDto {
    @IsString()
    name: string;


    @IsEmail()
    email: string;


    @IsString()
    @MinLength(6)
    password: string;


    @IsString()
    role?: string;
}


@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}


    @Post('login')
    async login(@Body() loginDto: LoginDto) {
        const user = await this.authService.validateUser(loginDto.email, loginDto.password);
        return this.authService.login(user);
    }


    @Post('signup')
    async signup(@Body() signupDto: SignupDto) {
        return this.authService.signup(signupDto);
    }
}