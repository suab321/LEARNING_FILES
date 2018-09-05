const express=require('express')
const auth_route=require('./routes/auth')
const cookie=require('cookieparser')
const passportsetup=require('./config/pass-setup')
const session=require('express-session')
const key=require('./config/keys')
const passport=require('passport')
const profile_routes=require('./routes/profile_route')

const app=express()
app.set('view engine','ejs')
app.use(session({key:key.session_key,secret:key.session_key,cookie:{maxAge:60*60*1000}}))
app.use(passport.initialize())
app.use(passport.session())

const check=(req,res,next)=>{
	if(req.user)
		res.render('home',{name:req.user.user})
	else
		next()
}

app.use('/auth',auth_route)
app.use('/profile',profile_routes)
app.get('/',check,(req,res)=>{
	res.redirect('/auth/login')
})




app.listen(3000)
