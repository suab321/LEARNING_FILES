const express=require('express')


const app=express()

app.use(express.static('views'))
app.set('view engine','ejs')


app.get('/home',(req,res)=>{
	res.render('dis')
})



