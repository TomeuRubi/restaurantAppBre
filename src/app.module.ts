import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { TablesModule } from './tables/tables.module';
import { OrdersModule } from './orders/orders.module';
import { PaymentsModule } from './payments/payments.module';
import { AuthModule } from './auth/auth.module';


@Module({
imports: [AuthModule, RestaurantsModule, TablesModule, OrdersModule, PaymentsModule],
providers: [PrismaService]
})
export class AppModule {}