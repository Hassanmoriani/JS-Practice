function sayMyName() {
    console.log("H");
    console.log("A");
    console.log("S");
    console.log("S");
    console.log("A");
    console.log("N");
}

// sayMyName()

// function addTwoNumber(num1,num2){
//     console.log(num1+num2);
// }

function addTwoNumber(num1, num2) {
    // let result = num1 +num2
    // return result

    return num1 + num2
}

const result = addTwoNumber(4, 2)
// console.log("Result :" ,result);

function loginUserMessage(username = "Smith") {
    if (!username) {
        console.log("Please enter a username")
        return
    } else
        return `${username} just logged in`
}
// console.log(loginUserMessage("Hassan Moriani"))
// console.log(loginUserMessage("Hassan Moriani"))


function calculateCarPrice(...num1){
    return num1
}

// console.log(calculateCarPrice(200,400,500))
const user = {
    username : "Hassam Ali",
    price : 199
}

function handleObject(anyobject){
console.log(`Username is ${anyobject.username} and price ${anyobject.price}`)
}

// handleObject(user)

handleObject({
    username : "Sam Fisher",
    price : 399.99
})


// const myNewArray = [200,300,400,500]

function returnSecondvalue(getArrayIndex){
return getArrayIndex[1]
}

// console.log(returnSecondvalue(myNewArray));
console.log(returnSecondvalue([200,300,400,500]));

