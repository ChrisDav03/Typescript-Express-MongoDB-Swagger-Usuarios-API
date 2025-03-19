import 'reflect-metadata';
import { IsString, IsEmail, IsOptional, IsNumber, ValidateNested, IsArray } from 'class-validator';
import { Type } from 'class-transformer';

class DireccionDTO {
    @IsString()
    calle?: string;

    @IsString()
    ciudad?: string;

    @IsString()
    pais?: string;

    @IsString()
    codigo_postal?: string;
}

export class CrearUsuarioDTO {
    @IsString()
    nombre!: string;

    @IsEmail()
    email!: string;

    @IsOptional()
    @IsNumber()
    edad?: number;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => DireccionDTO)
    direcciones?: DireccionDTO[];
}

export class ActualizarUsuarioDTO {
    @IsOptional()
    @IsString()
    nombre?: string;

    @IsOptional()
    @IsEmail()
    email?: string;

    @IsOptional()
    @IsNumber()
    edad?: number;

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => DireccionDTO)
    direcciones?: DireccionDTO[];
}
