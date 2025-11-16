import { CreateTableDto } from '../tables/dto/create-table.dto';
import { TablesService } from '../tables/tables.service';
export declare class TablesController {
    private svc;
    constructor(svc: TablesService);
    create(createRestaurantDto: CreateTableDto): import(".prisma/client").Prisma.Prisma__TableClient<{
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
