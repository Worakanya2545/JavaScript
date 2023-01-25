// getBudgete([
    // {name : "John", age : 21, Budget: 23000 },
    // {name : "Stave", age : 32, Budget: 40000 },
    // {name : "Martin", age : 16, Budget: 27000 }

// ]) ;//65700
// getBudgete([
//     {name : "John", age: 21, Budget: 29000 },
//     {name : "Stave", age: 32, Budget: 32000 },
//     {name : "Martin", age: 16, Budget: 1600 } 

// ]) ;//62600



function getBudgets(array) {
    var sum =0 
    for (let i=0; i <array.length; i++) 
        sum +=array[i].budget 
    return sum 
}

  let arrayOneTest =[
    {name : "John", age : 21, Budget: 23000 },
    {name : "Stave", age : 32, Budget: 40000 },
    {name : "Martin", age : 16, Budget: 27000 }
  ];

let arrayTwoTest=[...arrayOneTest];

console.log(arrayTwoTest);


console.log("The Total Budget is :"+getBudgets(arrayTwoTest)+"");