var cp=require('child_process');

var commands={
    list:"ls",
    makeFolder:'mkdir',
    remove:'rm',
    compile:"g++"
}



//doing with spawn//
// var task1=cp.spawn("ls");
// task1.stdout.on("data",(data)=>{
//     console.log(data.toString());
// })
// task1.stderr.on("error",(error)=>{
//     console.log(error);
// })
// //ends//


// //doing with .exec //
// var task2=cp.exec(commands.makeFolder+" "+"abhi",(err,data)=>{
//     if(err)
//         console.log(err.message);
//     else
//         console.log(data);
// var task3=cp.exec(commands.remove+" -r abhi",(err,data)=>{
//     if(err)
//         console.log(err.message);
// });
// })
//ends//

//doing with execFile//
var task4=cp.execFile(commands.compile,['abhi.cpp'],(err,data)=>{
    if(err)
        console.log("line 39 "+err);
    else
        cp.execFile('./a.out',[],(err,data)=>{
            if(err)
                console.log("err is "+err);
            else
                console.log(data);
        })
})
//ends//
