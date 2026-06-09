import express from 'express';
import studentRouter from './routes/student.js';
import teacherRouter from './routes/teacher.js';

const app = express();
const PORT = 8000

app.use('/students', studentRouter);
app.use('/teachers', teacherRouter)

app.listen(PORT, () => {
    console.log('Server Started!!')
});