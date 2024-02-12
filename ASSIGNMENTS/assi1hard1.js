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

function makeegg(){
    console.log("boiling egg");
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res("egg is ready sir");
        }, Math.random()*5+5);
    })
}

async function makebreakfst(){
console.log("Lets Start Making Delicious Breaskfast Now Starting with");

try {
    const a = await maketea();
//console.log(a);
const b = await maketoast();
//console.log(b);
const c = await makeegg();
//console.log(c);

Promise.all([a,b,c])
.then((value)=>{
    console.log("breakfast is ready",value);
})
} catch (error) {
    console.log("some eroor");
}

}
makebreakfst()

