import { Controller, Post, Body, Param } from '@nestjs/common';
import { PaymentsService } from './payments.service';


@Controller('payments')
export class PaymentsController {
constructor(private svc: PaymentsService) {}


@Post('intent/:orderId')
createIntent(@Param('orderId') orderId: string) {
return this.svc.createPaymentIntent(orderId);
}


@Post('confirm')
confirm(@Body() body: any) {
return this.svc.confirmPayment(body.orderId, body.paymentRef, body.amount, body.method);
}
}