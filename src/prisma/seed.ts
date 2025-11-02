import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';


const prisma = new PrismaClient();


async function main() {
console.log('🌱 Iniciando seed de la base de datos...');


// Crear restaurante demo
const restaurant = await prisma.restaurant.create({
data: {
name: 'La Buena Mesa',
address: 'Calle Falsa 123',
email: 'contacto@labuenamesa.com',
phone: '+34 600 123 456',
logoUrl: 'https://placehold.co/200x200?text=Logo',
},
});


// Crear usuarios demo
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


// Crear mesas
const tables = await prisma.table.createMany({
data: [
{ restaurantId: restaurant.id, tableNumber: 1 },
{ restaurantId: restaurant.id, tableNumber: 2 },
{ restaurantId: restaurant.id, tableNumber: 3 },
],
});


// Crear elementos del menú
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
});