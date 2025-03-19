import express from 'express';
import { UsuarioController } from '../controllers/usuario.controller';
import { validarDTO } from '../middlewares/validation.middleware';
import { CrearUsuarioDTO, ActualizarUsuarioDTO } from '../dtos/usuario.dto';

const router = express.Router();

router.post('/', validarDTO(CrearUsuarioDTO), UsuarioController.crearUsuario);
router.get('/', UsuarioController.obtenerUsuarios);
router.get('/:id', UsuarioController.obtenerUsuarioPorId);
router.put('/:id', validarDTO(ActualizarUsuarioDTO), UsuarioController.actualizarUsuario);
router.delete('/:id', UsuarioController.eliminarUsuario);

export default router;
