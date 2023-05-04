import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import checkInput from '../middleware/checkInput.js';
import openaiController from '../controllers/openaiController.js';
import getData from '../controllers/getData.js';
import deleteData from '../controllers/deleteData.js';
import connectDB from '../db/connect.js';

const app = express();

dotenv.config();

app.use(express.json());

app.use(cors());

app.use(checkInput);

app.post('/api/ser', openaiController);

app.get('/api/ser', getData);

app.delete('/api/ser', deleteData);

const startServer = async () => {
  try {
      await connectDB(process.env.URL);
  }catch (error){
      console.log(error);
  };
};

startServer();

export default app;