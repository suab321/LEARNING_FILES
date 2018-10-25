const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');


const app=express()
app.use(bodyParser.json())
app.set('view engine','ejs')
const mongouri="mongodb://127.0.0.1/testdb"
const connection=mongoose.createConnection(mongouri);

let gfs;
connection.once("open",()=>{
    gfs=Grid(connection.db,mongoose.mongo)
})
const storage=new GridFsStorage({
    url:mongouri,
    file:(req,file)=>{
        const fileInfo={
        filename:file.originalname
        }
    }
});
const check_type=(ext)=>{
    if(ext==='png')
        return 1;
    else
        return 0;
}
const upload=multer({storage}).single("file");

app.get('/',(req,res)=>{

    gfs.files.find({}).toArray().then(files=>{
        res.render("index",{file:files})
    }).catch(err=>{
        console.log(err)
        res.render("index",{files:files})
    })
})

app.get('/file/:filename',(req,res)=>{
    gfs.files.find({filename:req.params.filename}).toArray().then(files=>{console.log(files)}).catch(err=>console.log(err))
})

app.get("/image/:filename",(req,res)=>{
    gfs.files.findOne({filename:req.params.filename}).then(file=>{
        const readstream=gfs.createReadStream(file.filename)
        readstream.pipe(res).catch(err=>console.log(err))
    }).catch(err=>console.log(err))
})

app.post('/upload',(req,res)=>{
       upload(req,res,err=>{
           if(err)
            console.log(err)
           else
            console.log(req.file.originalname)
       })
})

app.listen(3000);