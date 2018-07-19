const express=require('express');
const path=require('path');
const multer=require('multer');

const storage=multer.diskStorage({
    destination:'./public/uploads/',
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+new Date()+path.extname(file.originalname))
    }
})
const upload=multer({storage}).single('filename');

const app=express();

app.set('view engine','ejs');
app.use(express.static('./public')); 
 app.get('/',(req,res)=>res.render('new'));
 app.post('/upload',(req,res)=>{
     upload(req,res,(err)=>{
         if(err)
         console.log(err)
         else
         console.log(req.file);

     })
 })

 app.listen(3000);