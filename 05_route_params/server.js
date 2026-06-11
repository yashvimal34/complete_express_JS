import express from 'express'

const app = express();
const PORT = 8000;

// 1. Basic example.

/* app.get('/student/delete/:id', (req, res) => {
        res.send(req.params.id)
    });
*/

// 2. If you have ecommerce site and you want to provide route parameters by destructuing data.

/*
    app.get('/product/iphone/:model', (req, res) => {
        const {model} = req.params
        res.send(`Iphone ${model} pro max`)
    });
*/

// 3. example of route parameter by destructuring.
app.get('/product/:category/:model', (req, res) => {
    const {category, model} = req.params
    res.send(`You are seaching for ${category} ${model}`)
});


app.listen(PORT, () => {
    console.log('server started')
});