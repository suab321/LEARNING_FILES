const fs=require('fs');
const path=require('path');
const {fileModel}=require('./database/db')

function createFile(data){
    return new Promise((resolve,reject)=>{
        console.log(data);
        fileModel.findById({_id:data.filename}).then(res=>{
           if(res===null){
               console.log("yes");
               reject("no");
               return;
           }
            try {
                fs.writeFileSync(path.join(__dirname,"public",res.path),res.data,'utf8');
                resolve("yes");
            } catch (error) {
                reject("no");
            }
        }).catch(err=>{reject("no")})
    })
}

async function generate(data){
    return new Promise(async(resolve,reject)=>{
        try{
        if(!fs.existsSync(path.join(__dirname,"public",data.name)))
            fs.mkdirSync(path.join(__dirname,"public",data.name))
        else
            resolve("yes");
        }catch(err){resolve("no")}
        data.Contents.map(i=>{
            if(i.isFile===1){
                createFile(i).catch(err=>{resolve("no")})
                // console.log("file");
                1
            }
            else{
                if(!fs.existsSync(path.join(__dirname,"public",i.path))){
                    try{
                        fs.mkdirSync(path.join(__dirname,"public",i.path));
                    }catch(ex){resolve("no")}
                }
            }
        })
        resolve("yes");
    })
}

process.on("message",async(data)=>{
    const res=await generate(data.result[0]);
    if(res=="yes")
        process.send("yes");
    else
        process.send("no");
})