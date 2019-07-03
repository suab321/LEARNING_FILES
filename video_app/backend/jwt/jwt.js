const jwt=require('jsonwebtoken');

//generating token from data//
 function generateToken(data){
    try{
    let token=jwt.sign({user:data},"suab");
    return token;
    }catch(err){
        return 0
    }
}
//functions ends//


//generating data from tokens//
 function decodeToken(token){
    try{
    let data=jwt.verify(token,"suab");
    return data;
    }catch(err){
        return 0;
    }
}
//functions ends//

module.exports={
    generateToken,
    decodeToken
}