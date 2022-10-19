import mongoose from 'mongoose';
import { config } from './config';
import { logger } from './logger';

export const connectToDb = async () => {
  try {
    await mongoose.connect(config.DATABASE_URL);
    logger.info(`Connected to Database`);
  } catch (e) {
    logger.error(e);
    process.exit(1);
  }
};

export const disconnectFromDb = () => {
  return mongoose.connection.close();
};
