import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.js';

dotenv.config()
const app = express();

app.use(express.json());

async function server(){
    const PORT = process.env.PORT
    await connectDB(process.env.MONGO_URI!)

    app.get('/', (req, res)=> {
        return res.status(200).json({
            message: 'successfully set up server'
        })
    })

    app.listen(PORT, ()=> {
        console.log(`Server listening at port ${PORT}`)
    })
}

server()