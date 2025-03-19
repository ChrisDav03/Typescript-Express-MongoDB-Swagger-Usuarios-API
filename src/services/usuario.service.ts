import Usuario, { IUsuario } from '../models/usuario.model';

export class UsuarioService {
    static async crearUsuario(data: IUsuario) {
        return await Usuario.create(data);
    }

    static async obtenerUsuarios(page: number = 1, limit: number = 10) {
        const usuarios = await Usuario.find()
            .limit(limit)
            .skip((page - 1) * limit);

        const total = await Usuario.countDocuments();
        return { usuarios, totalPages: Math.ceil(total / limit), currentPage: page };
    }

    static async obtenerUsuarioPorId(id: string) {
        return await Usuario.findById(id);
    }

    static async actualizarUsuario(id: string, data: Partial<IUsuario>) {
        return await Usuario.findByIdAndUpdate(id, data, { new: true });
    }

    static async eliminarUsuario(id: string) {
        return await Usuario.findByIdAndDelete(id);
    }

    static async buscarPorCiudad(ciudad: string) {
        return await Usuario.find({ 'direcciones.ciudad': ciudad });
    }
}
