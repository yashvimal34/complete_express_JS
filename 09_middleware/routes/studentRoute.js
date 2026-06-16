import express from 'express';
import { createNewStudentData, deleteStudentData, getAllStudentData, updateStudentData } from '../controllers/studentController.js';
import { validateHTTPmethods } from '../middlewares/studentMiddleware.js';

const studentRoute = express.Router();

studentRoute.get('/all', validateHTTPmethods, getAllStudentData);
studentRoute.post('/create', validateHTTPmethods, createNewStudentData);
studentRoute.put('/update', validateHTTPmethods, updateStudentData);
studentRoute.delete('/delete', validateHTTPmethods, deleteStudentData)


export default studentRoute;