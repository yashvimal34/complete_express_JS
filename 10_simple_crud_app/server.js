import express from 'express';
import { productRouter } from './routes/productRoute.js';
import { configDotenv } from 'dotenv';
import { connectDB } from './config/db.js';

configDotenv();

const app = express();
const PORT = process.env.PORT || 5000;

// Parse JSON
app.use(express.json());

//Connect Database
connectDB();

// Routes
app.use('/api/products', productRouter)

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.listen(PORT, () => {
    console.log("server started...")
});