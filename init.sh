# init.sh
#!/bin/sh
set -e


echo "🏗️ Ejecutando migraciones Prisma..."
npx prisma migrate deploy


echo "🧬 Generando cliente Prisma..."
npx prisma generate


echo "🌱 Ejecutando seed de la base de datos..."
npm run seed


echo "✅ Inicialización completa. Iniciando la aplicación..."
npm run start:prod