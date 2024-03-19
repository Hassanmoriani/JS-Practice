const marvel_heros = ["Thor","Ironman","spiderman"]
const dc_heros = ["superman","flash", "Batman"]


// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

// Array Conact Method
// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

// Array spared Meth
const all_new_heros =[...marvel_heros,...dc_heros]
// console.log(all_new_heros)

// Array flat method to convert the complixe array into single array
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

// Array IsArray method check the type 
console.log(Array.isArray(marvel_heros));
console.log(Array.isArray("Hassan"))

// Array Arrayfrom method convert the single to words into array form
console.log(Array.from("Hassan"))
console.log(Array.from({name:"Hassan"})) // interesting


// Array Array.of method to move the variables values into array form
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))


let a = 2
let b = 4
let c = 8
let d = 10
let g = 24

console.log(Array.of(a,b,c,d,g));



