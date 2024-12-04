import express from 'express'
import quizzes from '../db/quizzes.js'
import authVerify from '../middleware/authVerify.js';


const quizzRouter=express.Router();

quizzRouter.route('/')

   .get(authVerify,(req,res)=>
    {
       res.json(quizzes.data);
   
    }
   )

 export default quizzRouter;  