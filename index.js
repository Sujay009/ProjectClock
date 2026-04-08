let d=new Date();

document.getElementById("time").innerHTML=d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
setInterval((()=>{
    let d=new Date();
    document.getElementById("time").innerHTML=d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
}),1000);
