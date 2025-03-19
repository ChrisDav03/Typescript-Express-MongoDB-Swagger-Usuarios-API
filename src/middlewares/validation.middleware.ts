import { Request, Response, NextFunction } from 'express';
import { plainToInstance, ClassConstructor } from 'class-transformer';
import { validate } from 'class-validator';

export const validarDTO = <T extends object>(dtoClass: ClassConstructor<T>) => {
    return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const output = plainToInstance(dtoClass, req.body);
        const errors = await validate(output, { whitelist: true, forbidNonWhitelisted: true });

        if (errors.length > 0) {
            res.status(400).json({
                errores: errors.map(err => ({
                    propiedad: err.property,
                    errores: Object.values(err.constraints || {}),
                })),
            });
            return; // **Asegura que la ejecución no pase a `next()` después de enviar una respuesta**
        }

        next(); // **Llamamos a `next()` si no hay errores**
    };
};
