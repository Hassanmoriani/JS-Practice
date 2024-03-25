const user ={
    username : "Hassan",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username}, Welcome to website`);
        // console.log(this)
    }


}

// user.welcomeMessage()
// user.username ="Sam Fisher"
// user.welcomeMessage()

// console.log(this)


// function chai(){
//     let username = "Hassan"
//     console.log(this.username)
// }

// chai()


// const chai = function (params) {
//     let username = "Hassan"
//     console.log(this.username)
// }
// chai()


// const chai = () => {
//     let username = "Hassan"
//     console.log(this)
// }
// chai()


// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

// const addTwo = (num1,num2) => num1 + num2


// const addTwo = (num1,num2) => (num1 + num2)

const addTwo = (num1,num2) => {username : "Hassan"}

console.log(addTwo(5,4))


const myArray  = [1,2,1,4,7,7,8]

myArray.forEach(function () {
    
})
