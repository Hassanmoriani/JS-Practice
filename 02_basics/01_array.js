const Numbers = [1,2,3,4,5,6,7,8]
Numbers.push(9)                   // push method add new value an array at end


Numbers.pop()                     // pop method remove last value from an array
// console.log(Numbers)




Numbers.unshift(8)               // Unshift method adds and new value at start of the array
// console.log(Numbers)

Numbers.shift()                  // shift methd remove the first value from an array
// console.log(Numbers)



const myArray = [1,2,3,4,5,6]


//slice

// console.log("A ", myArray);

const myn1 = myArray.slice(1,3)    //slice method does not manipulate the Array Data
// console.log(myn1);
// console.log("B ", myArray);


const myn2 = myArray.splice(1,3)   // Splice method manipulate the Array Data
// console.log("C ", myArray);
// console.log(myn2);



