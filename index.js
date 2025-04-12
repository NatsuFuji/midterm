import express, { json } from 'express';
import connectDB from './config/db.js';
import { router as userRouter } from './routes/userRoutes.js';
import {router as quoteRoutes} from './routes/quoteRoutes.js';
import cors from 'cors';


const port = process.env.PORT || 3001;
const app = express();
app.use(cors());
app.use(json());

connectDB();

app.use('/api/users', userRouter);
app.use('/api/get', quoteRoutes);
app.use('/api/create', quoteRoutes);


app.get('/api/Hello', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Active on port ${port}`);
});