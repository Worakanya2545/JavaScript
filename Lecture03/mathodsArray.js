let arr1 = ["A", true, 2];

//Push and pop 
console.log("\n******* Push and Pop *********\n");
console.log(arr1.push("new value"));
console.log(arr1);
console.log(arr1.pop()); //Remove last value
console.log(arr1);

//shift and unshift
console.log("\n******* shift and unshift *********\n");
console.log(arr1.unshift("new value"));
console.log(arr1);
console.log(arr1.shift()); //Remove first value
console.log(arr1);

//concat
console.log("\n******* concat *********\n");
let arr2 = ["B", false, 3];
let newArr = arr1.concat(arr2);
let newArr2 = arr2.concat([1, 2, 3]);
console.log(newArr);
console.log(newArr2);