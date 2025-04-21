import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/admin.routes.js'


// App Config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// Middlewares
app.use(express.json())
app.use(cors())    // This is for the frontend to connect to the backend

// API Endpoints
app.use('/api/admin',adminRouter)

app.get('/',(req,res)=>{
    res.send('API working')
})

app.listen(port, ()=> console.log("Server Started",port))