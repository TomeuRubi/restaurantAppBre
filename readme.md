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



# Comandos de despliegue local
# 1. Construir contenedores
$ docker-compose build


# 2. Levantar los servicios (NestJS + PostgreSQL)
$ docker-compose up -d


# 3. Aplicar migraciones Prisma dentro del contenedor
$ docker-compose exec app npx prisma migrate deploy


# 4. Sembrar datos iniciales (opcional)
$ docker-compose exec app npx ts-node prisma/seed.ts


# 5. Ver logs
$ docker-compose logs -f app
```


✅ **Resultado:**
- Contenedor Node/NestJS listo en `http://localhost:3000`
- PostgreSQL corriendo en `localhost:5432`
- Variables de entorno configuradas.


El backend y la base de datos quedan listos para desarrollo o pruebas locales sin configuración adicional.

- Relaciones 1:N entre restaurante, mesas, pedidos, menús y usuarios.
- Enlaces entre pedidos, líneas de pedido y pagos.
- Campos automáticos `createdAt` y `updatedAt`.
- Enum-like strings para `status` y `role`.


Tras agregar este archivo, ejecuta:

npx prisma migrate dev --name init_schema

para crear la base de datos inicial.


npm run seed

para ejecutar el archivo `prisma/seed.ts` fácilmente desde tu entorno local o dentro del contenedor Docker (`docker-compose exec app npm run seed`).

# Comandos actualizados
# 1️⃣ Construir la imagen
$ docker-compose build


# 2️⃣ Levantar servicios (ejecutará automáticamente migraciones y seed)
$ docker-compose up -d


# 3️⃣ Ver logs
$ docker-compose logs -f app
```


✅ **Resultado:**
- El contenedor ejecuta `init.sh` al iniciar.
- Se aplican migraciones, se genera el cliente Prisma y se ejecuta el seed automáticamente.
- El backend se levanta listo en `http://localhost:3000` con datos iniciales.


Cómo usarlo

Construir e iniciar el entorno de desarrollo:

docker-compose -f docker-compose.dev.yml up --build


Ejecutar migraciones Prisma dentro del contenedor:

docker-compose -f docker-compose.dev.yml exec app npx prisma migrate dev


Ejecutar el seed (opcional):

docker-compose -f docker-compose.dev.yml exec app npm run seed


Acceder a la app:
👉 http://localhost:3000