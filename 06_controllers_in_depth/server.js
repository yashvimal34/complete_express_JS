import express from 'express';
import { studentRouter } from './routes/student.js';

const app = express();
const PORT = 8000;

app.use('/student', studentRouter)

app.listen(PORT, () => {
    console.log('server started')
});