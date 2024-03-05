
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import colors from "colors";
import dotenv from "dotenv";
import connectDB from './dbConnection.js';
import formAttribute from './routes/formAttributeRoutes.js'

//configure env
dotenv.config()

//databse config
connectDB()

//rest object
const app = express()


//middelwares

app.use(morgan('dev'))
app.use(express.json())

app.use(cors({
    origin: ["http://localhost:3000", "https://system-automationconfig-frontend.netlify.app"],
    credentials: true,
}))

// Router
app.use('/api/v1/form-attribute', formAttribute)


const PORT = process.env.PORT || 8082;

app.listen(PORT, () => {
    console.log(
        `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
            .white
    );
});
