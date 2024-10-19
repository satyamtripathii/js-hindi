// primitive
//7 types : String, Number, Boolean,null, undefined, Symbol, BigInt 
/*const score = 100
const scorevalue = 100.5

 const isLoggedin=false
 const outsideTemp=null
 let email;

 const id = Symbol('123')
 const anotherid = Symbol('123')

 console.log(id === anotherid)

 const bignumber = 1234567889n

 console.log(typeof bignumber) */

// Reference (non primitive)
// array, objects, functions

// const heros = ["shaktiman","naagraj", "rama" ] //array

// let myobject={
//     name:"satyam",
//     age:22
// }

// const myFunction =function(){
//     console.log("hello world")
// }
/********************************************************** */

// stack(primitive), heap(non-primitive)
// let myYoutubename = "satyamtripathi"

// let anotherytname =myYoutubename

// anotherytname="tripathi"

// console.log(myYoutubename)
// console.log(anotherytname)

let userone ={
    email : "sadgdth@.com",
    upi : "sdfd@ybl"
}


let usertwo = userone

usertwo.email = "hitesg@e"

console.log(userone.email);
console.log(usertwo.email);
