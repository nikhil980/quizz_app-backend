import express from 'express';
import signUpHandler from '../controller/auth.handler.js';
import {loginHandler} from '../controller/auth.handler.js';

 const loginRouter=express.Router();
 const signUpRouter=express.Router();

loginRouter.route("/")
.post(loginHandler);

signUpRouter.route("/")
.post(signUpHandler);

export default signUpRouter;
export {loginRouter};
