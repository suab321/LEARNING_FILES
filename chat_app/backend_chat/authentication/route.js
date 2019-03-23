const router=require('express').Router();
const passport=require('passport');
const {front}=require('../url');
const {generateToken}=require('../jwt/encrypt');

router.get('/google',passport.authenticate('google',{
    scope:['profile','email'],
    accessType:'offline',
    prompt:"consent"
}))

router.get('/google/redirect',passport.authenticate('google',{failureRedircet:`${front}/login`}),(req,res)=>{
    res.redirect(`${front}/loggedIn`);
})

module.exports=router