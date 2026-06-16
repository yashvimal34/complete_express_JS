import express from 'express';
import studentRoute from './routes/studentRoute.js';

const app = express();
const PORT = 8000;

app.use('/students', studentRoute);

app.listen(PORT, () => {
    console.log('Server Started...')
});