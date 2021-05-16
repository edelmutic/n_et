import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = process.env.PORT || 5000;
const corsOptions = { credentials: true, origin: process.env.URL || '*' };

app.get('/', (req, res) => {
  res.send('Hello world');
});

const start = () => {
  try {
    app.listen(PORT, () => {
      console.log(`🚀 Server started at ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
