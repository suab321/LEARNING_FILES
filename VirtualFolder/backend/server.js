
const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const cp=require('child_process');
const fs=require('fs');
const path=require('path');
const cors=require('cors');



const {streamRoute,folderModel,fileModel}=require('./database/db')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname));
app.use(cors());

function uploadFile(dir,name){
    return new Promise((resolve,reject)=>{
        fs.readFile(path.join(dir,name),(err,file)=>{
        if(err)
            reject(err);
        else{
            const db=new fileModel;
            db.name=name;
            db.data=file;
            db.path=path.join(dir,name);
            db.save().then(res=>{
                resolve({res,dir});
            }).catch(err=>{reject(err)});
            }
        })
    })
}

function saveToDataBase(data){
    return new Promise(async(resolve,reject)=>{
        const db=new folderModel;
        let contentObj=[];
        let promises=[];
        data.map(async(i)=>{
            i.content.map(async(j)=>{
                try{
                    const stat=fs.lstatSync(path.join(i.folder,j));
                    if(stat.isFile()){
                        promises.push(uploadFile(i.folder,j));
                    }
                    else
                        contentObj.push({name:j,path:path.join(i.folder,j),isFile:0,filename:'',parentName:i.folder});
                }catch(err){
                    console.log(err);
                }
            })
        })
        try{
        const l=await Promise.all(promises);
        l.map(i=>{
            contentObj.push({name:i.res.name,path:i.res.path,isFile:1,filename:i.res._id,parentName:i.dir})
        })
        db.name='VirtulFolder';
        db.Contents=contentObj;
        db.save().then(res=>{
            resolve(res);
        }).catch(err=>{reject(err)});
        }catch(err){
            console.log(err);
        }
    })
}


app.get("/",async(req,res)=>{
    const forked=cp.fork('./heavy.js');
    forked.send('');
    forked.on("message",async(data)=>{
        try{
            const result=await saveToDataBase(data);
            res.send("ok");
        }catch(err){
            res.send(err);
        }
    })
});

app.get('/get',(req,res)=>{
    folderModel.findById({_id:"5dda44ea5efe013ba2bf4f3f"}).then(result=>[
        res.status(200).json(result)
    ]).catch(err=>{res.status(400).json(err);})
})

// console.log(__dirname);
app.listen(3002||process.env.PORT);



