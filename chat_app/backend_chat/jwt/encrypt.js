const jwt=require('jsonwebtoken');

const generateToken=(id)=>{
    try{
        const token=jwt.sign({user:id},"suab");
        return token;
    }catch (err){
        return 0;
    }
}

const decodeToken=(token)=>{
    try{
        const user=jwt.verify(token,"suab");
        return user;
    }catch{
        return 0;
    }
}

module.exports={
    generateToken,
    decodeToken
}