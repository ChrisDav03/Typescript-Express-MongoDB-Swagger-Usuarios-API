import express from 'express';
import { UsuarioController } from '../controllers/usuario.controller';
import { validarDTO } from '../middlewares/validation.middleware';
import { CrearUsuarioDTO, ActualizarUsuarioDTO } from '../dtos/usuario.dto';

const router = express.Router();
/**
 * @swagger
 * /usarios:
 *   post:
 *     summary: Crea un usuario
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente.
 */
router.post('/', validarDTO(CrearUsuarioDTO), UsuarioController.crearUsuario);
/**
 * @swagger
 * /usuarios:
 *   get:
 *     summary: Obtiene todos los usuarios
 *     responses:
 *       200:
 *         description: Lista de usuarios
 */
router.get('/', UsuarioController.obtenerUsuarios);
/**
 * @swagger
 * /usuarios/{id}:
 *   get:
 *     summary: Obtiene un usuario por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del usuario
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuario encontrado
 *       404:
 *         description: Usuario no encontrado
 */
router.get('/:id', UsuarioController.obtenerUsuarioPorId);
/**
 * @swagger
 * /usuarios/{id}:
 *   put:
 *     summary: Actualiza un usuario por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del usuario
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuario actualizado
 *       404:
 *         description: Usuario no encontrado
 */
router.put('/:id', validarDTO(ActualizarUsuarioDTO), UsuarioController.actualizarUsuario);
/**
 * @swagger
 * /usuarios/{id}:
 *   delete:
 *     summary: Elimina un usuario por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del usuario
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuario eliminado
 *       404:
 *         description: Usuario no encontrado
 */
router.delete('/:id', UsuarioController.eliminarUsuario);

export default router;
