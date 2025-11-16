# Dockerfile.dev
FROM node:18-alpine

WORKDIR /usr/src/app

# Instalar dependencias necesarias para desarrollo
RUN apk add --no-cache bash openssl

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar TODAS las dependencias (incluye las de desarrollo)
RUN npm install
COPY . .
# Copiar el esquema Prisma y el resto del código
COPY prisma ./prisma


# Generar cliente Prisma (ahora sí encuentra el schema)
RUN npx prisma generate

# Exponer puerto del servidor NestJS
EXPOSE 3000

# Comando por defecto (modo watch)
CMD ["npm", "run", "start:dev"]
