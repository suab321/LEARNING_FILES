const express=require('express');
const app=express();

app.set('view engine','ejs');
app.use(express.static('views'));
require('express-ads')(app,{
    auth:(req,res,next)=>{
        next();
    }
});
app.get('/',(req,res)=>{
    res.render('ad',{
        ad:req.deliverAd
    });
});

app.listen(process.env.PORT || 3002);