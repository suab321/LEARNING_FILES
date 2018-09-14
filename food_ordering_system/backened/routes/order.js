const router=require('express').Router()
const {user_model}=require('../database/data_base')
const bodyparser=require('body-parser')

router.use(bodyparser.urlencoded({extended:false}))
router.use(bodyparser.json())

//adding items to cart
router.put('/add',(req,res)=>{
    user_model.findOneAndUpdate({email:req.body.email},
        {$addToSet:{'order':{'name':req.body.name,'price':req.body.price,
        'date':Date.now(),'category':req.body.category,'url':req.body.url}}})
        .then(user=>res.status(200).json(user))
        .catch(err=>res.status(400).json(err))
})
//removing items from cart
router.delete('/remove/:email/:id',(req,res)=>{
    user_model.findOneAndUpdate({email:req.params.email},{$pull:{'order':{'_id':req.params.id}}})
    .then(user=>res.status(200).json(user[0].order))
    .catch(err=>res.status(400).json(err))
})

//giving food data in cart
router.get('/cart_food/:email',(req,res)=>{
    user_model.find({email:req.params.email},{order:true}).then(user=>{
        res.status(200).json(user[0].order)
    })
})

//adding placed orders
router.put('/order_placed/:email',(req,res)=>{
    user_model.findOneAndUpdate({email:req.params.email},
        {$addToSet:{'order_placed':{'orders':{'name':req.body.name,'price':req.body.price,'category':req.body.category,'url':req.body.url}}}
    }).then(user=>res.status(200).json(user))
})
//getting placed orders from db
router.get('/get_placed_order/:email',(req,res)=>{
    user_model.find({email:req.params.email},{order_placed:true})
    .then(user=>res.status(200).json(user))
    .catch(err=>res.status(500).json(err))
}) 

module.exports=router