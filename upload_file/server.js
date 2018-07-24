const express=require('express');
const multer=require('multer');
const ejs=require('ejs');
const path=require('path');

const app=express();

const storage=multer.diskStorage({destination:'./public/uploads/',filename:(req,file,cb)=>{
    cb(null,file.fieldname+Date.now()+path.extname(file.originalname));
}})

const upload=multer({storage,fileFilter:(req,file,cb)=>checkfile(file,cb)}).single('fieldname');
const checkfile=(file,cb)=>{
    const filtypes=/jpeg|jpg|png|gif/;
    const filetype=filtypes.test(path.extname(file.originalname).toLowerCase())
    const mimtype=filtypes.test(file.mimetype);
    if(filetype && mimtype){
        cb(null,true);
    }
    else{
        cb('Select image only');
    }
}
app.post('/upload',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            res.render('new',{
                msg:err
            })
        }
        else if(req.file===undefined){
            res.render('new',{
                msg:'Select a file'
            })
        }
        else{
            res.render('new',{
                msg:'Uploaded Successfully',
                file:`uploads/${req.file.filename}`
            })
        }
    })
})
app.use(express.static('./public'));
app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.render('new');})

app.listen(3000);
