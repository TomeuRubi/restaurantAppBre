# QR Restaurant Backend (starter)


## Requisitos
- Node >= 18
- PostgreSQL

## Setup local
1. Copia `.env.example` a `.env` y actualiza las variables.
2. `npm install`
3. `npx prisma generate`
4. `npx prisma migrate dev --name init`
5. `npm run seed`
6. `npm run start:dev`


API correrá en http://localhost:3000