import express from 'express';
import products from './products/data.js';

const app = express();
const PORT = 8000;

app.get('/products', (req, res) => {
    res.json(products)
})

app.listen(PORT, () => {
    console.log('server started')
});