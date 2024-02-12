//custom Promise Control flow 
//there are 3 function 

function fetchdata(arr){
return new Promise((res ,rej)=>{

    setTimeout(() => {
        const a =  arr.map((elem)=>{
        
         return  elem*elem
          
        })
        res(a)
    }, 2000);
})

}
function analysedata(){

}
function processdata(){

}


fetchdata([2,3,4,5])
.then((val)=>{
    console.log(val);
})

