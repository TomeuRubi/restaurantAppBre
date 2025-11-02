import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


async function main() {
const r = await prisma.restaurant.create({ data: { name: 'Demo Bar', address: 'Calle Falsa 123' } });
const cat = await prisma.menuCategory.create({ data: { restaurantId: r.id, name: 'Entrantes' } });
await prisma.menuItem.create({ data: { categoryId: cat.id, name: 'Patatas bravas', price: 6.5 } });
console.log('Seed finished');
}


main().catch(e => { console.error(e); process.exit(1); }).finally(() => prisma.$disconnect());