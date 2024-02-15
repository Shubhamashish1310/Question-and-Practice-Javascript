// //custom Promise Control flow 
// //there are 3 function 

function fetchdata(arr){
    console.log("Feteching data from",arr)
    return new Promise((res,rej)=>{
        setTimeout(() => {
            const a = arr.map((elem)=>{
               return elem*2;   
            })
            
             res(a)
        }, 21000);
       
    })
    
}

function analysedata(arr2){
    console.log("HERE WE HAVE TO ANALYSE THE DATA ",arr2);
    return new Promise((resolve, reject) => {
        const sum = arr2.reduce((acc,val)=>{
            acc= acc+val
            return acc;
        },0)
        const avg = sum/arr2.length
        for(i in arr2){
            if(arr2[i]<0){
                reject(Error("!HAS NEGATIVE NUMBER"))
            }
        }
        resolve({sum,avg})
    })
}
//first way of using it 
// function processdat(array){
//     console.log("LETS START THE PROCESSING");
//     return fetchdata(array)
//     .then((result) => {
//         console.log(result)
//         return analysedata(result)
//     }).then((sum_average) => {
//         console.log("Sum and Average of",sum_average);
//     }).catch((error)=>{
//         console.log("THE GIVEN DATA HAS NEGATIVE NUMBER",error);
//     })
    
// }

//second way using Async Await
processdat([2,3,4,5,6])
console.time()

async function processdat(array){
    console.log("LETS START THE PROCESSING",array);
    const a = await fetchdata(array)
    console.log(a);
    const b = await analysedata(a)
    console.log("sum and average",b);
    console.timeEnd()
    return b
   
    
}

