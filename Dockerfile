# Usar la imagen base de Node.js
FROM node:18

# Definir el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copiar archivos de configuración y dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar todo el código de la aplicación
COPY . .

# Exponer el puerto de la aplicación
EXPOSE 3000

# Comando por defecto para iniciar la aplicación
CMD ["npm", "run", "dev"]
