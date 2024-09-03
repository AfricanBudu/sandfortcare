import dotenv from 'dotenv';
import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import applicationRoutes from './routes/applicationRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

dotenv.config();

mongoose.connect(process.env.mongoDB_URL, {})
    .then(() => console.log('Database connected successfully'))
    .catch(err => console.log('Database connection error: ', err))


const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

const corsOption = {
    origin: function (origin, callback) {
        const allowedOrigins = [
            'https://sandfortcare-abdullahs-projects-3b40fa71.vercel.app',
            'http://localhost:5173'
        ];
        
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200,
    credentials: true
}
app.use(cors(corsOption));

app.get("/", (req, res) => {
    res.json({data: "Hello"})
});

app.use("/", applicationRoutes);
app.use("/admin", adminRoutes);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



