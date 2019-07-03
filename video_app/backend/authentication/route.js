const passport=require('passport');
const router=require('express').Router();

//importing developer made modules//
const {generateToken}=require('../jwt/jwt')
//ends//

router.get('/clicked_login',
    passport.authenticate('google',{
        scope:['profile']
    })
)

router.get('/login',passport.authenticate('google'),(req,res)=>{
    let token=generateToken(req.user._id);
    req.session.user=token;
    res.send(req.session.user);
})

module.exports={
    google_router:router
}