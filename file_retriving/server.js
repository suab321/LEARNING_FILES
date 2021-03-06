const express=require('express')
const bodyparser=require('body-parser')
const multer=require('multer')
const path=require('path')
const fs=require('fs')
const mongoose=require('mongoose')
const fetch=require('fetch')


mongoose.connect('mongodb://127.0.0.1/testdb')
mongoose.Promise=global.Promise

const image_model=new mongoose.Schema({image:{data:Buffer,contentType:String},name:String})
const image_path_model=new mongoose.Schema({path:{type:String,required:true},name:{type:String,required:true}})
const image_path=mongoose.model('image_path',image_path_model)
const image=mongoose.model('image',image_model)
const app=express()
//app.use(express.static('static/form'))
app.use(express.static('views'))
app.use(express.static('public'))
app.set('view engine','ejs')
app.get('/',(req,res)=>{
	res.render('form/form')
})

const storage=multer.diskStorage({destination:'./public/uploads/',filename:(req,file,cb)=>{
	cb(null,file.fieldname+Date.now()+path.extname(file.originalname))
}})
const upload=multer({storage,limits:1000000,fileFilter:(req,file,cb)=>check(file,cb)}).single('image');
const check=(file,cb)=>{
	filetypes=/jpeg|jpg|png|gif/
	const dec1=filetypes.test(path.extname(file.originalname).toLowerCase())
	const dec2=filetypes.test(file.mimetype)
	if(dec1&&dec2)
		return cb(null,true)
	else
		cb('Select images only!')
}
app.post('/upload',(req,res)=>{
	upload(req,res,(err)=>{
	if(req.file===undefined)
		res.render('form/form',{msg:'Select a file'})
	else if(err)
		res.render('form/form',{msg:err})
	else{
		res.render('form/form',{src:'uploads/'+req.file.filename})
		const db=new image_path
		db.name="abhinav"
		db.path='uploads/'+req.file.filename
		db.save(err=>{
			if(err)
				console.log(err)
		})
		}
	})


})

app.get('/getimage',(req,res)=>{
	const{name}=req.params;
	image_path.find({name:'abhinav'},(err,user)=>{
		if(err)
			res.send(err)
		else{
			res.send(user[0])
		}
	})

})

app.listen(3000)