import { PrismaService } from '../prisma.service';
export declare class PaymentsService {
    private prisma;
    private stripe;
    constructor(prisma: PrismaService);
    createPaymentIntent(orderId: string): Promise<{
        clientSecret: any;
    }>;
    confirmPayment(orderId: string, paymentRef: string, amount: number, method?: string): Promise<{
        id: string;
        amount: number;
        method: string;
        status: string;
        paymentRef: string | null;
        createdAt: Date;
        orderId: string;
    }>;
}
