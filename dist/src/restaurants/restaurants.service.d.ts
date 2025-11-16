import { PrismaService } from '../prisma.service';
export declare class RestaurantsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: any): import(".prisma/client").Prisma.Prisma__RestaurantClient<{
        id: string;
        email: string | null;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        address: string | null;
        phone: string | null;
        logoUrl: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        email: string | null;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        address: string | null;
        phone: string | null;
        logoUrl: string | null;
    }[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__RestaurantClient<{
        id: string;
        email: string | null;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        address: string | null;
        phone: string | null;
        logoUrl: string | null;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
}
