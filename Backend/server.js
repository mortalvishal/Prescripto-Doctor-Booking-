import express from 'express'
import cors from 'cors'
import 'dotenv/config'


// App Config
const app = express()
const port = process.env.PORT || 4000

// Middlewares
app.use(express.json())
app.use(cors())    // This is for the frontend to connect to the backend

// API Endpoints
app.get('/',(req,res)=>{
    res.send('API working')
})

app.listen(port, ()=> console.log("Server started on that port = ",port))