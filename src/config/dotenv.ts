import dotenv from 'dotenv';
import path from 'path';

// Cargar variables de entorno desde un archivo .env
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

export const config = {
    PORT: process.env.PORT || '3000',
    MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/prueba_backend',
};
