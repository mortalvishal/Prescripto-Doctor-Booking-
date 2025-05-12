import express from 'express'
import { registerUser, loginUser, getProfile } from '../controllers/user.controller.js'
import authUser from '../middleware/authuser.js'



const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login',loginUser)
userRouter.post('/get-profile',authUser ,getProfile)




export default userRouter;