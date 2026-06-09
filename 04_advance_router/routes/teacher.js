import express from 'express';

const teacherRouter = express.Router();

teacherRouter.get('/all', (req, res) => {
    res.send("All Teachers Data")
});

teacherRouter.post('/create', (req, res) => {
    res.send("Teachers Created Successfully")
});

teacherRouter.put('/update', (req, res) => {
    res.send("Teachers Updated Successfully")
});

teacherRouter.delete('/delete', (req, res) => {
    res.send("Teacher deleted from database")
});

export default teacherRouter;