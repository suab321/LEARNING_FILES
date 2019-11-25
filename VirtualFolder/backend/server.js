
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

function uploadFile(dest,parentName){
    return new Promise((resolve,reject)=>{
        fs.readFile(dest,(err,file)=>{
        if(err)
            reject(err);
        else{
            const db=new fileModel;
            var name=dest.split('/');
            name=name[name.length-1];
            db.name=name;
            db.data=file;
            db.path=dest;
            db.save().then(res=>{
                resolve({res,parentName});
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
                    const stat=fs.lstatSync(j);
                    if(stat.isDirectory()){
                        var name=j.split('/');
                        name=name[name.length-1];
                        contentObj.push({name:name,path:j,isFile:0,filename:'',parentName:i.folder});
                        
                    }
                    else{
                        promises.push(uploadFile(j,i.folder));
                    }
                }catch(err){
                    console.log(err);
                }
            })
        })
        resolve(contentObj);
        try{
        const l=await Promise.all(promises);
        l.map(i=>{
            contentObj.push({name:i.res.name,path:i.res.path,isFile:1,filename:i.res._id,parentName:i.parentName})
        })
        db.name=data[0].folder;
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
    forked.send('node_modules');
    forked.on("message",async(data)=>{
        try{
            // res.send(data);
            const result=await saveToDataBase(data);
            res.send(result);
        }catch(err){
            res.send(err);
        }
    })
});

app.get('/get',(req,res)=>{
    folderModel.find({}).then(result=>[
        res.status(200).json(result)
    ]).catch(err=>{res.status(400).json(err);})
})

// console.log(__dirname);
app.listen(3002||process.env.PORT);


// function abhi(){
// const fs=require('fs');
// try{
// const d=fs.lstatSync('node_modules/.bin/is-ci');
// console.log(d.isFile());
// }catch(err){console.log(err)};
// }
// abhi();