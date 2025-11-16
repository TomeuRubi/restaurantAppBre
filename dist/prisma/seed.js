"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const bcrypt = __importStar(require("bcrypt"));
const prisma = new client_1.PrismaClient();
async function main() {
    console.log('🌱 Iniciando seed de la base de datos...');
    const restaurant = await prisma.restaurant.create({
        data: {
            name: 'La Buena Mesa',
            address: 'Calle Falsa 123',
            email: 'contacto@labuenamesa.com',
            phone: '+34 600 123 456',
            logoUrl: 'https://placehold.co/200x200?text=Logo',
        },
    });
    const passwordHash = await bcrypt.hash('123456', 10);
    const owner = await prisma.user.create({
        data: {
            name: 'Carlos Dueño',
            email: 'owner@labuenamesa.com',
            passwordHash,
            role: 'owner',
            restaurantId: restaurant.id,
        },
    });
    const staff = await prisma.user.create({
        data: {
            name: 'Laura Staff',
            email: 'staff@labuenamesa.com',
            passwordHash,
            role: 'staff',
            restaurantId: restaurant.id,
        },
    });
    const client = await prisma.user.create({
        data: {
            name: 'Pedro Cliente',
            email: 'client@labuenamesa.com',
            passwordHash,
            role: 'client',
        },
    });
    const tables = await prisma.table.createMany({
        data: [
            { restaurantId: restaurant.id, tableNumber: 1 },
            { restaurantId: restaurant.id, tableNumber: 2 },
            { restaurantId: restaurant.id, tableNumber: 3 },
        ],
    });
    const menuItems = await prisma.menuItem.createMany({
        data: [
            {
                restaurantId: restaurant.id,
                name: 'Hamburguesa Clásica',
                description: 'Carne 100% vacuno, queso, tomate y lechuga.',
                price: 10.5,
            },
            {
                restaurantId: restaurant.id,
                name: 'Ensalada César',
                description: 'tomate y lechuga.',
                price: 5.5
            }
        ]
    });
}
//# sourceMappingURL=seed.js.map