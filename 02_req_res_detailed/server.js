import express from 'express';
const app = express();
const PORT = 8000

/* ---------------- This is example of how two callbacks in the same routing ------------ */
app.get('/double-routing', (req, res, next) => {  // Here we use (next method) or (next() function)
    console.log('First Callback')
    next();  // populate that (next() function) to jump to another callback.
}, (req, res) => {
    res.send('Secone Callback')
})
/* ---------------- This is example of how two callbacks in the same routing ------------ */

/* --------------------- Now we will talk about Arrays of Callbacks ------------------ */
const cb1 = (req, res, next) => {
    console.log("First Callback")
    next()
};

const cb2 = (req, res, next) => {
    console.log("second callback")
    next()
};

const cb3 = (req, res) => {
    console.log("third callback")
    res.send("Arrays Of Callbacks")
}

app.get('/array-callback', [cb1, cb2, cb3])
/* --------------------- Now we will talk about Arrays of Callbacks ------------------ */

app.listen(PORT, () => {console.log('Server started')})