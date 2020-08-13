import mongoose from 'mongoose';
import { app } from './app';

const start = async () => {
  if (!process.env.MONGO_URL) {
    throw new Error('MONGO_URL must be define');
  }

  if (!process.env.ACCESS_KEY_ID) {
    throw new Error('ACCESS_KEY_ID must be define');
  }

  if (!process.env.SECRET_ACCESS_KEY) {
    throw new Error('SECRET_ACCESS_KEY must be define');
  }

  if (!process.env.BUCKET_NAME) {
    throw new Error('BUCKET_NAME must be define');
  }
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('connected to Mongodb');
  } catch (err) {
    throw new Error(err);
  }

  app.listen(3000, () => {
    console.log('Listening on port 3000!');
  });
};

start();