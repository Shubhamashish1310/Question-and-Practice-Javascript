promise1=new Promise((res,rej)=>{
    setTimeout(()=>{
        res(10)
    })
})
promise2=new Promise((res,rej)=>{
    setTimeout(()=>{
        res(20)
    })
})


var addTwoPromises = async function(promise1, promise2) {
    return new Promise((res,rej)=>{
        res(promise1+promise2)
    })
 };

 addTwoPromises(promise1,promise2).then((result)=>{
     return promise1(result)
 })
 
 
       
