// "use strict"

// age = 10
// console.log(age)


// undefined = 10
// console.log(undefined)
// null = 5
// console.log(null)


// var age = 25
// console.log(age)
// delete age
// console.log(age)


// function sum(a, a)
// {
//     console.log(a + a)
// }

// sum(1,19)









// "use strict"
// console.log(this)


//functional scope
// function abc(){
//     console.log(this)
// }
// abc()

// const abc = () => {
//     console.log(this)
// }
// abc()
// obj.abc()



//objects
// let obj = {
//     fn1 : function(){
//         console.log(this)
//     },
//     fn2 : () => {
//         console.log(this)
//     },
//     fn3 : function(){
//         console.log(this)
//         const temp = () => {
//             console.log(this)
//         }
//         temp()
//     },
//     fn4 : () => {
//             console.log(this)
//             function temp(){
//                 console.log(this)
//             }
//             temp()
//     }
// }     
// // obj.fn1()
// // obj.fn2()
// // obj.fn3()
// obj.fn4()


// const button = document.getElementById("btn")

// button.addEventListener("click", () => {
//     console.log(this)
// })


// Call, bind & apply


// let p1 = {
//     naam : "Shubham",
//     age : 25,
//     introduce : function(){
//         console.log(`Hi I am ${this.naam} and my age is ${this.age}`)
//     }
// }
// let p2 = {
//     naam : "Kajol",
//     age : 53
// }
// p1.introduce.call(p2)
// namaste()
// namaste.call(p2, "Fish")
// namaste.call(p1, "Dog")
// p1.introduce()
// p2.introduce()
// p1.introduce2()


// function namaste(pet)
// {
//     // console.log(this)
//     console.log(`Namaste mera naam hai ${this.naam} and i have a pet : ${pet}`)
// }









//apply, bind

let obj = {
    naam : "Shubham",
    age : 25
}



function sayHi(color, sport)
{
    console.log(`Hi, my name is ${this.naam} and i am ${this.age} years old and my fav color is ${color} and my fav sport is ${sport}`)
}
sayHi()
sayHi.call(obj, "Red", "Cricket") 
sayHi.apply(obj, ["Black", "Cricket"]) // same as call, just pass arguments in an array


const fn = sayHi.bind(obj, "Purple", "Golf") // dont pass arguments in arrays, 
// but the bind method returns a fn whose "this" points to the object, we have to call the fn ourselves
fn()


