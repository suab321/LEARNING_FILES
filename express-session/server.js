const express=require('express')
const validator=require('express-validator')
const session=require('express-session');
const ejs=require('ejs');

const app=express();
app.use(validator());
app.set('view engine','ejs');
app.get('/',(req,res)=>{
	res.render('new');
})
app.use(session({
	secret:'abhinav',
	resave:'false',
	saveUninitialized:true
}))
app.use((req,res,next)=>{
	if(!req.session.views)
		req.session.view={}
	let path=parseurl(req).pathname
	req.session.views[path]=(req.session.views[path]||0)+1
	next();
})

app.post('/submit',(req,res)=>{
	req.check('Email','invalid email').isEmail();
	let email_err=req.validationErrors()
	req.check('Password','password invalid').isLenght({min:5}).equals(req.body.CPassword)
	let pass_err=req.validationErrors();
	if(email_err)
		res.render('new',{msg:email_err})
	else if(pass_err)
		res.render('new',{msg:pass_err})
	else
		res.render('new1',{
			msg:req.session.views['/submit']
		})
})
app.listen(3000);

