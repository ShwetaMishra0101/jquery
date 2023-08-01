const per = (data,callback)=>{
    setTimeout(()=>{
        callback(data*2)
    },2000)
}

const handle =(res)=>{
    console.log(res)
}

per(5,handle)