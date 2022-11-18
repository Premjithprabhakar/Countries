var pro=new Promise((res,rej)=>{
     watchTime=3
    if (watchTime>1) {
        res("succes")
    }
    else{
        rej("fail")
    }
})
pro.then((result)=>{
    console.log(result);
})
.catch((result)=>{
    console.log(result);
})