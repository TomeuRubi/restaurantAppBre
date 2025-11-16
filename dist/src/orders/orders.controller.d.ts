import { CreateOrderDto } from './dto/create-order.dto';
import { OrdersService } from './orders.service';
export declare class OrdersController {
    private svc;
    constructor(svc: OrdersService);
    create(createOrderDto: CreateOrderDto): Promise<{
        totalAmount: number;
        items: {
            id: string;
            orderId: string;
            quantity: number;
            price: number;
            notes: string | null;
            menuItemId: string;
        }[];
        id: string;
        restaurantId: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        tableId: string;
        userId: string | null;
    }>;
    byTable(tableId: string): import(".prisma/client").Prisma.PrismaPromise<({
        payment: {
            id: string;
            createdAt: Date;
            amount: number;
            method: string;
            status: string;
            paymentRef: string | null;
            orderId: string;
        } | null;
        items: {
            id: string;
            orderId: string;
            quantity: number;
            price: number;
            notes: string | null;
            menuItemId: string;
        }[];
    } & {
        id: string;
        restaurantId: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        totalAmount: number;
        tableId: string;
        userId: string | null;
    })[]>;
}
