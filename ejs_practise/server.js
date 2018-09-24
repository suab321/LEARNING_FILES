const express=require('express')
const ejs=require('ejs')

const app=express()
app.use(express.static('views'))
app.use(express.static('css'))
app.set('view engine','ejs')
app.get('/',(req,res)=>{
    res.render('abhi',{foo:[1,2,3,4,5]});
})
app.listen(process.env.PORT||3002)




