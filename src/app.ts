import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import usuarioRoutes from './routes/usuario.routes';
import connectDB from './config/db';
import { setupSwagger } from './config/swagger';

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
setupSwagger(app);
connectDB();

app.use('/usuarios', usuarioRoutes);

export default app;
