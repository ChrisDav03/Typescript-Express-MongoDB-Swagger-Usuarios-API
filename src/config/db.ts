import mongoose from 'mongoose';
import { config } from './dotenv';

const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGO_URI);
        console.log('✅ MongoDB conectado a Mongo');
    } catch (error) {
        console.error('❌ Error conectando a MongoDB:', error);
        process.exit(1);
    }
};

export default connectDB;
