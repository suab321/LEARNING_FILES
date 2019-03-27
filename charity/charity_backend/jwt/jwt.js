const jwt=require('jsonwebtoken');

function generateToken(id){
    try{
    const token=jwt.sign({user:id},"suab");
    return token;
    }
    catch{
        return 0;
    }
}

function decodeToken(token){
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