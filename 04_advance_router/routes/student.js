import express from 'express';
const studentRouter = express.Router();

studentRouter.get('/all', (req, res) => {
    res.send("All Students")
});

studentRouter.post('/create', (req, res) => {
    res.send('Student Created Successfully')
});

studentRouter.put('/update', (req, res) => {
    res.send("Student updated")
});

studentRouter.delete('/delete', (req, res) => {
    res.send("Student remove from Database")
});

export default studentRouter;