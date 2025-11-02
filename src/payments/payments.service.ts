import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import Stripe from 'stripe';


@Injectable()
export class PaymentsService {
private stripe: Stripe;
constructor(private prisma: PrismaService) {
this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', { apiVersion: '2024-08-01' });
}


async createPaymentIntent(orderId: string) {
const order = await this.prisma.order.findUnique({ where: { id: orderId }, include: { items: true } });
if (!order) throw new Error('Order not found');
const amount = Math.round(order.totalAmount * 100);
const intent = await this.stripe.paymentIntents.create({ amount, currency: 'eur' });
return { clientSecret: intent.client_secret };
}


async confirmPayment(orderId: string, paymentRef: string, amount: number, method = 'card') {
// store payment
const payment = await this.prisma.payment.create({ data: { orderId, amount, method, status: 'completed', paymentRef } });
await this.prisma.order.update({ where: { id: orderId }, data: { status: 'paid' } });
return payment;
}
}