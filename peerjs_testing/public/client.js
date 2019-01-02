var peer = new Peer({
	host: location.hostname,
	port: location.port || (location.protocol === 'https:' ? 443 : 80),
	path: '/peerjs'
})
peer.on('open',(id)=>{
    document.getElementById('ist').value=id;
});
var connect=document.getElementById('button');
var call=document.getElementById('call');
var localvideo=document.getElementById('local_video');
var remotevideo=document.getElementById('remote_video');

connect.onclick=()=>start();
call.onclick=()=>startcall();

var conn;

function start(){
    console.log('clicked')
    conn=peer.connect(document.getElementById(('2nd').value))
    peer.on('connection',(conn)=>{console.log(conn)});
}
function startcall(){
var peercall=peer.call(document.getElementById('2nd').value,mediastream())
var answer=peer.on('answer',call=>{
    console.log('call triggered')
    call.answer(navigator.getUserMedia({video:true,audio:true},(stream=>console.log(stream)),(err)=>console.log(err)))})
 

peer.on('stream',stream=>{
    console.log('stream recevied from remote');
    remotevideo.srcObject=stream;
})
}
function mediastream(){
   navigator.getUserMedia =navigator.getUserMedia|| navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
   navigator.mediaDevices.getUserMedia({video:true}).then(stream=>{localvideo.srcObject=stream})
    return navigator.getUserMedia({video:true,audio:true},(stream)=>{console.log(stream)},(err)=>console.err(err))
}
