function shubham(arr){
    return new Promise((res,rej)=>{

        const a = arr.map((elem)=>{
            return elem*elem
        })
        return res(a)
    })
    
}
shubham([2,3,4,5,6])
.then((val)=>{
    console.log(val);
})