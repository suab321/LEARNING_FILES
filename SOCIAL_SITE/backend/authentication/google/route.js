const router=require('express').Router();
const passport=require('passport');


router.get('/login',
    passport.authenticate('google',{
        scope:['profile']
    })
)
router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
    res.redirect("http://localhost:3000/all_user");
})

module.exports=router;