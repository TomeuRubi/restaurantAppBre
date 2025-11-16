import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { RestaurantsService } from './restaurants.service';
export declare class RestaurantsController {
    private svc;
    constructor(svc: RestaurantsService);
    create(createRestaurantDto: CreateRestaurantDto): import(".prisma/client").Prisma.Prisma__RestaurantClient<{
        id: string;
        email: string | null;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        address: string | null;
        phone: string | null;
        logoUrl: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    list(): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        email: string | null;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        address: string | null;
        phone: string | null;
        logoUrl: string | null;
    }[]>;
    one(id: string): import(".prisma/client").Prisma.Prisma__RestaurantClient<{
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
