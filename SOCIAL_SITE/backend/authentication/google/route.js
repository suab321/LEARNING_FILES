const router=require('express').Router();
const passport=require('passport');


router.get('/logout',(req,res)=>{
    req.logOut();
})
router.get('/logout',(req,res)=>{
    console.log(req.user);
})

router.get('/login',
    passport.authenticate('google',{
        scope:['profile']
    })
)
router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
    res.redirect("http://localhost:3000/google");
})

module.exports=router;