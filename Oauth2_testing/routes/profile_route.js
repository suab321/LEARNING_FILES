const router=require('express').Router()

router.get('/profile',(req,res)=>{
   res.redirect('/')
})

module.exports=router