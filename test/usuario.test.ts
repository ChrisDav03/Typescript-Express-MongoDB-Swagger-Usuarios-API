import request from 'supertest';
import app from '../src/app';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import Usuario from '../src/models/usuario.model';

let mongoServer: MongoMemoryServer;

beforeAll(async () => {
    // Cerrar cualquier conexión previa antes de abrir una nueva
    if (mongoose.connection.readyState !== 0) {
        await mongoose.disconnect();
    }

    // Iniciar MongoDB en memoria
    mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();
    
    await mongoose.connect(mongoUri);
});

beforeEach(async () => {
    // Limpiar la base de datos antes de cada prueba
    await Usuario.deleteMany({});
});

afterAll(async () => {
    // Cerrar la conexión a la base de datos después de las pruebas
    await mongoose.disconnect();
    await mongoServer.stop();
});

describe('API Usuarios', () => {
    it('Debe crear un usuario', async () => {
        const res = await request(app).post('/usuarios').send({
            nombre: 'Juan Pérez',
            email: 'juan@example.com',
            direcciones: [{ calle: 'Calle 123', ciudad: 'Bogotá', pais: 'Colombia', codigo_postal: '110111' }]
        });

        expect(res.status).toBe(201);
        expect(res.body).toHaveProperty('_id');
        expect(res.body.nombre).toBe('Juan Pérez');
    });

    it('Debe obtener la lista de usuarios', async () => {
        await Usuario.create({
            nombre: 'Ana López',
            email: 'ana@example.com',
            direcciones: [{ calle: 'Av. Siempre Viva', ciudad: 'Lima', pais: 'Perú', codigo_postal: '15001' }]
        });

        const res = await request(app).get('/usuarios');
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body.usuarios)).toBe(true);
        expect(res.body.usuarios.length).toBe(1);
    });

    it('Debe buscar un usuario por ID', async () => {
        const usuario = await Usuario.create({
            nombre: 'Ana López',
            email: 'ana@example.com',
            direcciones: [{ calle: 'Av. Siempre Viva', ciudad: 'Lima', pais: 'Perú', codigo_postal: '15001' }]
        });

        const res = await request(app).get(`/usuarios/${usuario._id}`);
        expect(res.status).toBe(200);
        expect(res.body.nombre).toBe('Ana López');
    });

    it('Debe actualizar un usuario', async () => {
        const usuario = await Usuario.create({
            nombre: 'Carlos Ramírez',
            email: 'carlos@example.com',
            direcciones: [{ calle: 'Av. Reforma', ciudad: 'CDMX', pais: 'México', codigo_postal: '11000' }]
        });

        const res = await request(app).put(`/usuarios/${usuario._id}`).send({ nombre: 'Carlos Updated' });
        expect(res.status).toBe(200);
        expect(res.body.nombre).toBe('Carlos Updated');
    });

    it('Debe eliminar un usuario', async () => {
        const usuario = await Usuario.create({
            nombre: 'María González',
            email: 'maria@example.com',
            direcciones: [{ calle: 'Calle 10', ciudad: 'Medellín', pais: 'Colombia', codigo_postal: '050001' }]
        });

        const res = await request(app).delete(`/usuarios/${usuario._id}`);
        expect(res.status).toBe(200);
        expect(res.body.mensaje).toBe('Usuario eliminado');
    });
});
