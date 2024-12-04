import express from 'express'
import cors from 'cors'

import quizzRouter from './router/quizzRouter.js';
import categoriesRouter from './router/categoriesRouter.js';
import {loginRouter} from './router/auth.router.js';
import signUpRouter from './router/auth.router.js';
import notFound from './middleware/pageNotFound.js';
const app =express();
const PORT=5000;

app.use(express.json());
app.use(cors());
app.get('/',(req,res)=>{
    res.send("hello Person");
})
app.use("/categories",categoriesRouter);
app.use('/quiz',quizzRouter)
app.use('/auth/login',loginRouter);
app.use('/auth/signup',signUpRouter);
app.use(notFound);
app.listen(process.env.PORT||PORT,()=>{
    console.log("server is started... ")
})