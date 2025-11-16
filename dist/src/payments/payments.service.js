"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const stripe_1 = __importDefault(require("stripe"));
let PaymentsService = class PaymentsService {
    constructor(prisma) {
        this.prisma = prisma;
        this.stripe = new stripe_1.default(process.env.STRIPE_SECRET_KEY || '', { apiVersion: '2024-08-01' });
    }
    async createPaymentIntent(orderId) {
        const order = await this.prisma.order.findUnique({ where: { id: orderId }, include: { items: true } });
        if (!order)
            throw new Error('Order not found');
        const amount = Math.round(order.totalAmount * 100);
        const intent = await this.stripe.paymentIntents.create({ amount, currency: 'eur' });
        return { clientSecret: intent.client_secret };
    }
    async confirmPayment(orderId, paymentRef, amount, method = 'card') {
        const payment = await this.prisma.payment.create({ data: { orderId, amount, method, status: 'completed', paymentRef } });
        await this.prisma.order.update({ where: { id: orderId }, data: { status: 'paid' } });
        return payment;
    }
};
exports.PaymentsService = PaymentsService;
exports.PaymentsService = PaymentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PaymentsService);
//# sourceMappingURL=payments.service.js.map