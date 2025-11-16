import { PrismaService } from '../prisma.service';
export declare class TablesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: any): import(".prisma/client").Prisma.Prisma__TableClient<{
        id: string;
        restaurantId: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        tableNumber: number;
        qrCodeUrl: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findByRestaurant(restaurantId: string): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        restaurantId: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        tableNumber: number;
        qrCodeUrl: string | null;
    }[]>;
}
