let a = new Promise((res, rej) => {
    setTimeout(() => {
        Math.random() > 0.5 ? res("success") : rej("failed");
    }, 1000);
})

a
    .then((data) => {
        console.log("eh first hai",data);
        return data
    })
    .catch((err) => {
       throw err
    })
    .then((data) => {
        console.log("eh fwirst hai",data);
        return data
    })
    .catch((err) => {
        console.log("yaa here last", err);
    })

