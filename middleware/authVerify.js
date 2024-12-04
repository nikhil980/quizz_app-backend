import jwt from 'jsonwebtoken'


//for authentication we made an middillware

const authVerify=(req,res,next)=>{
    const token=req.headers.authorization;
    try{
        const decodedToken=jwt.verify(token, "cb793b09b7fa71046b78d2331b52dcb20debc5644a90678fcddcb9ce1fdbdf623b8f3c4cf34b5430829e4575978bee68510cdb45eb54858d1203e9c3d301b031")
         req.user={userID:decodedToken.id}
         return next()
    }
    catch{
        console.log(`error from server ${JSON.stringify(err)}`)
    }
} 
export default  authVerify;