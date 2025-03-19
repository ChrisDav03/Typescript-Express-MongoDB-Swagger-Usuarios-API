import { Request, Response } from 'express';
import { UsuarioService } from '../services/usuario.service';

export class UsuarioController {
    static async crearUsuario(req: Request, res: Response): Promise<void> {
        try {
            const usuario = await UsuarioService.crearUsuario(req.body);
            res.status(201).json(usuario);
        } catch (error) {
            console.error('Error al crear usuario:', error);
            res.status(400).json({ error: (error as Error).message || 'Error al crear usuario' });
        }
    }

    static async obtenerUsuarios(req: Request, res: Response): Promise<void> {
        try {
            const page = parseInt(req.query.page as string, 10) || 1;
            const limit = parseInt(req.query.limit as string, 10) || 10;

            const usuarios = await UsuarioService.obtenerUsuarios(page, limit);
            res.json(usuarios);
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
            res.status(500).json({ error: (error as Error).message || 'Error al obtener usuarios' });
        }
    }

    static async obtenerUsuarioPorId(req: Request, res: Response): Promise<void> {
        try {
            const usuario = await UsuarioService.obtenerUsuarioPorId(req.params.id);
            if (!usuario) {
                res.status(404).json({ error: 'Usuario no encontrado' });
            }
            res.json(usuario);
        } catch (error) {
            console.error('Error al obtener usuario por ID:', error);
            res.status(500).json({ error: (error as Error).message || 'Error al obtener usuario' });
        }
    }

    static async actualizarUsuario(req: Request, res: Response): Promise<void> {
        try {
            const usuario = await UsuarioService.actualizarUsuario(req.params.id, req.body);
            if (!usuario) {
                res.status(404).json({ error: 'Usuario no encontrado' });
            }
            res.json(usuario);
        } catch (error) {
            console.error('Error al actualizar usuario:', error);
            res.status(400).json({ error: (error as Error).message || 'Error al actualizar usuario' });
        }
    }

    static async eliminarUsuario(req: Request, res: Response): Promise<void> {
        try {
            const usuarioEliminado = await UsuarioService.eliminarUsuario(req.params.id);
            if (!usuarioEliminado) {
                res.status(404).json({ error: 'Usuario no encontrado' });
            }
            res.json({ mensaje: 'Usuario eliminado' });
        } catch (error) {
            console.error('Error al eliminar usuario:', error);
            res.status(500).json({ error: (error as Error).message || 'Error al eliminar usuario' });
        }
    }
}
