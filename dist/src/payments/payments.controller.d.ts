import { PaymentsService } from './payments.service';
export declare class PaymentsController {
    private svc;
    constructor(svc: PaymentsService);
    createIntent(orderId: string): Promise<{
        clientSecret: any;
    }>;
    confirm(body: any): Promise<{
        id: string;
        amount: number;
        method: string;
        status: string;
        paymentRef: string | null;
        createdAt: Date;
        orderId: string;
    }>;
}
