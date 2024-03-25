// var c = 300
// let a = 100

// if (true) {
//     let a = 10
//     const b = 20
//     c = 30
//     console.log("Inner:" ,a)
// }

// console.log(a)
// console.log(b)
// console.log(c)



function one(){
    const usernmae = "Hassan"

    function two() {
        const website = "youtube"
        console.log(usernmae);
    }
    // console.log(website);
    // two()
}

// one()


if (true) {
    const usernmae ="Hassan"
    if (usernmae === "Hassan") {
        const website = " youtube"
        // console.log(usernmae + website );
    }
    // console.log(website);
}
// console.log(usernmae)

// ***************** interesting ********************


addOne(3)

function addOne(num){
return num + 1
}

// console.log(addOne);

addTwo(3)
const addTwo = function(num){
    return num + 1
}
