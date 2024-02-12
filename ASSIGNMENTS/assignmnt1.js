//question 1 
function maketea(){
    console.log("starting making tea");
    return new Promise((res,rej)=>{
        setTimeout(() => {
            console.log("water is boiling");
            setTimeout(() => {
                console.log("adding tea leaves");
                setTimeout(() => {
                    console.log("adding milk");
                    setTimeout(() => {
                        res("tea is Ready sir")
                    }, 500);
                }, 500);
            }, 500);
        }, 500);

    })
}

function maketoast(){
    console.log("starting making toast");
    return new Promise((res,rej)=>{
        setTimeout(() => {
            console.log("starting heating toast");
            setTimeout(() => {
                res("toast is Ready sir ")
            }, 2000);
        }, 1000);
    })
}


function makebreakfst(){
    return maketea()
    .then((value)=>{
        console.log(value);
        return maketoast()
    })
    .then((result)=>{
        console.log(result);
        return result
    })
    .catch(()=>{
        throw Error("galat hai bhai sahi karo")
    })
}

makebreakfst()
