import express from 'express';

const app = express();
const PORT = 8000;

app.get('/product', (req, res) => {
    const {category, model} = req.query
    res.send(`Your Product is ${category} and model is ${model}`)
});

app.listen(PORT, () => {
    console.log('Server started')
});