## 🚀 API de Usuarios - Node.js, Express, TypeScript y MongoDB
## 📌 Descripción
Esta es una API RESTful para la gestión de usuarios, desarrollada con Node.js, Express, TypeScript y MongoDB, siguiendo principios de Clean Architecture, SOLID y buenas prácticas.
Incluye validaciones con DTOs, documentación con Swagger, paginación, pruebas automatizadas con Jest y MongoDB en memoria, y despliegue con Docker

## 🛠 Tecnologías Utilizadas
* Node.js - Entorno de ejecución de JavaScript.
* Postman - Pruebas manuales con colección importable.
* Express - Framework para construir API REST.
* TypeScript - Tipado fuerte para JavaScript.
* MongoDB + Mongoose - Base de datos NoSQL.
* MongoMemoryServer - Base de datos en memoria para pruebas.
* Jest + Supertest - Pruebas automatizadas.
* Swagger - Documentación automática de API.
* class-validator & class-transformer - Validaciones en DTOs.
* dotenv - Manejo de variables de entorno.
* helmet & cors - Seguridad y control de accesos.
* morgan - Logger para solicitudes HTTP.
* Docker - Despliegue en contenedores.

## 🔧 Requisitos Previos
Antes de comenzar, asegúrate de tener instalado:

* Node.js (v14+ recomendado).
* MongoDB (Local o en la nube con MongoDB Atlas).
* Docker para despliegue con contenedores.
* Postman para pruebas manuales.V
## 📌 Colección de Postman
Para facilitar las pruebas manuales, puedes importar la colección de Postman incluida en el repositorio:

* Abrir Postman.
* Ir a File > Import.
* Seleccionar el archivo:
```sh
UsuarioAPITesting.postman_collection.json
  ```
* Probar los endpoints con la configuración predefinida.
✅ Esto te permitirá probar la API rápidamente sin escribir cada solicitud manualmente.



## 📖 Documentación de la API (Swagger)
La API está documentada con Swagger.
Accede a la documentación en la siguiente URL cuando el servidor esté corriendo:
```sh
  http://localhost:3000/api-docs
  ```

## ✅ Ejemplo de Petición
## 📌 Crear un Usuario (POST /usuarios)
📥 Solicitud (JSON)
```sh
  {
  "nombre": "Juan Pérez",
  "email": "juan@example.com",
  "direcciones": [
    {
      "calle": "Calle 123",
      "ciudad": "Bogotá",
      "pais": "Colombia",
      "codigo_postal": "110111"
    }
  ]
}

  ```
📤 Respuesta (201 - Creado)
```sh
  {
  "id": "60a4b5c2d5f4a8b47f83e417",
  "nombre": "Juan Pérez",
  "email": "juan@example.com",
  "direcciones": [
    {
      "calle": "Calle 123",
      "ciudad": "Bogotá",
      "pais": "Colombia",
      "codigo_postal": "110111"
    }
  ],
  "fecha_creacion": "2024-03-18T12:00:00.000Z"
}

  ```

## 🔍 Pruebas Automatizadas
Las pruebas unitarias e integración están implementadas con Jest y Supertest, utilizando una base de datos MongoDB en memoria.

📌 Ejecutar Pruebas
```sh
  npm run test
  ```

📌 Ejecutar con Docker
1️⃣ Construir y Levantar Contenedores
```sh
  docker-compose up -d --build
  ```
2️⃣ Verificar que los Contenedores están Corriendo
```sh
  docker ps
  ```
3️⃣ Detener y Eliminar los Contenedores
```sh
  docker-compose down
  ```
## 📜 Buenas Prácticas Implementadas
* ✅ Uso de DTOs para validaciones
* ✅ Separación de responsabilidades (Clean Architecture)
* ✅ Manejo de errores centralizado
* ✅ Paginación en GET /usuarios
* ✅ Documentación automática con Swagger
* ✅ Código tipado con TypeScript
* ✅ Seguridad con Helmet y CORS
* ✅ Despliegue con Docker
* ✅ Pruebas con Jest y MongoMemoryServer