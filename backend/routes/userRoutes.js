import express from "express";
import {registerUser, loginUser, userCredits, paymentRazorpay,verifyRazorPay} from '../controllers/userControllers.js'
import userAuth from "../middlewares.js/auth.js";

const userRouter = express.Router();

userRouter.post('/register',registerUser);
userRouter.post('/login',loginUser);
userRouter.get('/credits',userAuth,userCredits);
userRouter.post('/pay-razor',userAuth,paymentRazorpay);
userRouter.post('/verify-razor',verifyRazorPay);
export default userRouter;