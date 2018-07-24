const express=require('express');
const bodyparser=require('body-parser');
const app=express();
const router=express.Router();
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json());
app.use('/user',router);

router.get('/user',(req,res)=>{
    res.json('router.user');
})
app.route('/login')
    .get((req,res)=>{
        res.json('login get');
    })
    .post((req,res)=>{
        res.json(req.body);
    })
    app.listen(3002);