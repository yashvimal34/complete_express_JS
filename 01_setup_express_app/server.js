import express from 'express';
const app = express();
const PORT = 8000

//Basic Routing
app.get('/', (req, res) => {
    res.send('Home Page')
});

app.get('/about', (req, res) => {
    res.send('About Page')
});

// etc. You can create more routes acc. to your needs

/* Now we will talk about some HTTP Methods.

    GET => Reterive Data
    POST => Create/Insert Data
    PUT => Completely Update Data
    PATCH =? Partially Update Data
    Delete => Delete Data
    ALl => Any HTTP Method Request.
*/

app.listen(PORT, () => {
    console.log('Server Started')
});


// import express from 'express';
// import path from 'node:path'
// import fs from 'fs/promises'
// import { fileURLToPath } from 'node:url';

// const app = express();
// const PORT = 8000;
// const __dirname = path.dirname(fileURLToPath(import.meta.url))
// const publiePath = path.join(__dirname, 'public')

// app.use(express.static(publiePath));

// app.get('/', async (req, res) => {
//     const filePath = path.join(publiePath, 'index.html')
//     const content = await fs.readFile(filePath, 'utf8')
//     res.send(content)
// });

// app.listen(PORT, () => {
//     console.log("Server started!!")
// })