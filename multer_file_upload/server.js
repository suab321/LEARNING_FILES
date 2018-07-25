const express=require('express')
const multer=require('multer');
const path=require('path');
const ejs=require('ejs');
const mongoose=require('mongoose');
const mongo=require('mongodb');
const fs=require('fs');

const app=express()
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://127.0.0.1/testdb')
app.set('view engine','ejs')
app.use(express.static('./public'))


const user=new mongoose.Schema({
	image:{data:Buffer,contentType:String}
})
const user_model=mongoose.model('user',user);

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

app.get('/',(req,res)=>{
	res.render('form');
})
app.post('/upload',(req,res)=>{
	upload(req,res,(err)=>{
		if(err)
			res.render('form',{msg:'Images only'})
		else if(req.file===undefined)
			res.render('form',{msg:'Select a file'})
		else{
			res.render('form',{msg:'Uploaded'})
			let model=new user_model;
			model.image.data=fs.readFileSync('./public/uploads/'+req.file.filename);
			model.image.contentType=req.file.mimetype;
			model.save(err=>{
				if(err)
					console.log(err)
			})
		}
		
	})
})

app.listen(3000);