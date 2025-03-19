import mongoose, { Schema, Document } from 'mongoose';

interface IDireccion {
    calle: string;
    ciudad: string;
    pais: string;
    codigo_postal: string;
}

export interface IUsuario extends Document {
    nombre: string;
    email: string;
    edad?: number;
    fecha_creacion: Date;
    direcciones: IDireccion[];
}

const DireccionSchema = new Schema<IDireccion>({
    calle: { type: String, required: true },
    ciudad: { type: String, required: true },
    pais: { type: String, required: true },
    codigo_postal: { type: String, required: true }
});

const UsuarioSchema = new Schema<IUsuario>({
    nombre: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    edad: { type: Number },
    fecha_creacion: { type: Date, default: Date.now },
    direcciones: { type: [DireccionSchema], required: true }
});

export default mongoose.model<IUsuario>('Usuario', UsuarioSchema);
