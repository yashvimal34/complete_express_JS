import express from 'express';
import { createNewStudentData, deleteStudentData, getAllStudentsData, updateStudentData } from '../controllers/studentController.js';

export const studentRouter = express.Router();
const PORT = 8000;

studentRouter.get('/all', getAllStudentsData);
studentRouter.post('/create', createNewStudentData);
studentRouter.put('/update', updateStudentData);
studentRouter.delete('/delete', deleteStudentData);