const arrayOfNumber = [1, 2, 3, 4, "string"];

const sum = arrayOfNumber.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

console.log(sum); //10

// get string can run  >>>> 'AAA' >>> "string"
