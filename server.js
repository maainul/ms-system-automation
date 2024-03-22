
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import colors from "colors";
import dotenv from "dotenv";
import connectDB from './dbConnection.js';
import formAttributeRoute from './routes/formAttributeRoutes.js'
import tableRoute from './routes/tablesRoutes.js'

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
    origin: ["http://localhost:3003", "https://ms-system-automation.netlify.app"],
    credentials: true,
}))

// Router
app.use('/api/v1/hr/form', formAttributeRoute)
app.use('/api/v1/system/tables', tableRoute)

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(
        `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
            .white
    );
});
