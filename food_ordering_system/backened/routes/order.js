const router=require('express').Router()
const user_model=require('../database/data_base')
const bodyparser=require('body-parser')

router.use(bodyparser.urlencoded({extended:false}))
router.use(bodyparser.json())

router.put('/add',(req,res)=>{
    user_model.findOneAndUpdate({email:req.body.email},{$addToSet:{'order':{'name':req.body.name,'price':req.body.price,
        'date':Date.now(),'category':req.body.category}}})
        .then(user=>res.status(200).json(user))
        .catch(err=>res.status(400).json(err))
})
router.delete('/remove',(req,res)=>{
    user_model.findOneAndUpdate({email:req.body.email},{$pull:{'order':{'name':req.body.name}}})
    .then(user=>res.status(200).json(user))
    .catch(err=>res.status(400).json(err))
})

module.exports=router