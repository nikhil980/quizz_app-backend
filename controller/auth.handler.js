import jwt from 'jsonwebtoken'
import userData from '../db/users.js';
import {v4 as uuid} from "uuid"


const signUpHandler=(req,res)=>{
    const {email,password}=req.body;

    const isUserPresent=userData.users.some(user=>user.email===email&&user.password===password);
    if(isUserPresent)
    {
        res.status(422).json({message:"User is already exist"});
    }
    else
    {
      const id=uuid();

      const newUser={id,email,password};
      userData.users=[...userData.users,newUser];
      const token =jwt.sign({id:email},
        "cb793b09b7fa71046b78d2331b52dcb20debc5644a90678fcddcb9ce1fdbdf623b8f3c4cf34b5430829e4575978bee68510cdb45eb54858d1203e9c3d301b031"
      );

      res.json({message:`user is successfully created-->${email}::${token}`})
    }
}

 const loginHandler=(req,res)=>{
    
    const {email,password}=req.body;

    const isVerified=userData.users.some(user=>user.email===email&&user.password===password);
    if(isVerified)
    {
        console.log({email,password});
        const token=jwt.sign({id:email},
            "cb793b09b7fa71046b78d2331b52dcb20debc5644a90678fcddcb9ce1fdbdf623b8f3c4cf34b5430829e4575978bee68510cdb45eb54858d1203e9c3d301b031"
        )
        res.json({email,token,message:"You are login "});
    }
    else{
        res.status(401).json({message:"wrong credential"});
    }
}

export default signUpHandler;
export  {loginHandler}; 