import { AuthService } from './auth.service';
declare class LoginDto {
    email: string;
    password: string;
}
export declare class SignupDto {
    name: string;
    email: string;
    password: string;
    role?: string;
}
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginDto: LoginDto): Promise<{
        access_token: string;
        user: {
            id: any;
            email: any;
            name: any;
            role: any;
        };
    }>;
    signup(signupDto: SignupDto): Promise<{
        access_token: string;
        user: {
            id: any;
            email: any;
            name: any;
            role: any;
        };
    }>;
}
export {};
