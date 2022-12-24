//Date funtion retrun millissecond that have elapsed
//since midninght on January 1,1970, UTC
//this exaple takes 2 seconds to run

const start = Data.now();

console.log('Starting timer....');
//expected output : starting timer ...

setTimeout(() => {
        const millis = Date.now() - start;

        console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`);
        //expected output : seconds elapsed = 2 
    }, 2000

);