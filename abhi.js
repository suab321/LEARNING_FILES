
var datas=[];
date=Math.floor(Date.now()/1000);
// console.log(Math.floor(date/1000));

datas=[date+10,date+15,date+20]

console.log(datas)
setInterval(()=>{
    // console.log("no")
    var i=datas.indexOf(Math.floor(Date.now()/1000));
    console.log(i+" "+Math.floor(Date.now()/1000));
    // console.log(Date.now());
    if(i!==-1){
        datas.splice(i,1);
        console.log(datas.length+" removed");
    }
},1000);