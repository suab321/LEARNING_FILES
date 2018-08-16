const express=require('express')
const bodyparser=require('body-parser')
const mongoose=require('mongoose')
const mailer=require('nodemailer')


var transporter=mailer.createTransport({
	service:'gmail',
	auth:{
		user:'adityasaha890@gmail.com',
		pass:'9051571833'
	}
});


mongoose.Promise=global.Promise
mongoose.connect('mongodb://127.0.0.1/testdb')
var temp_user=new mongoose.Schema({
	email:{type:String,required:true,unique:true},
	pass:{type:String}
})
var permanant_user=new mongoose.Schema({
	email:{type:String},
	pass:{type:String}
})
const permanant_model=mongoose.model('permanant_table',permanant_user)
const temp_model=mongoose.model('temporary_user_table',temp_user)
const app=express()

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

app.post('/register',(req,res)=>{
	const temp_table=new temp_model
	temp_table.email=req.body.email
	temp_table.pass=req.body.pass
	temp_table.save((err,user)=>{(err)?console.log(err):send(req.body.email)})

})
app.get('/verfify/:email',(req,res)=>{
	const{email}=req.params;
	temp_model.find({email:email},(err,user)=>{
		if(err)
			console.log(err)
		else{
			const model=new permanant_model
			model.email=user[0].email
			model.pass=user[0].pass
			model.save((err,user)=>{
				if(err)
					res.status(500).json(err)
				else
					res.status(200).json(user)
			})

		}
	})
})


const send=(email)=>{
var mailoption={
	from:'adityasaha890@gmail.com',
	to:email,
	subject:'Using nodemailer',
	text:'From nodemailer express Click the link below for verification',
	html:'<p>Click for verification<a href="http://localhost:3000/verfify/:'+email+'">For verification</a></p>'
};

transporter.sendMail(mailoption).then((info)=>{
	console.log(info)
})
.catch((err)=>{
	console.log(err)
})
}

app.listen(3000)