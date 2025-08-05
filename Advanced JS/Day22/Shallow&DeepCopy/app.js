// let arr = [1,2,3,4,5]
// let arr2 = arr

// console.log(arr)
// console.log(arr2)

// arr2.push(6)
// arr2.push(7)
// arr2.push(8)

// console.log(arr)
// console.log(arr2)



// let arr = [1,2,3,4,5]
// let arr2 = structuredClone(arr)


// console.log(arr)
// console.log(arr2)


// // arr.push(10)
// arr2.push(10)


// console.log(arr)
// console.log(arr2)














// let p = {
//     name : "Shubham",
//     balance : 200,
//     colors : ["black", "white"]
// }

// let p2 = p
// p.balance = 300
// console.log(p)
// console.log(2)




let p = {
    name : "Shubham",
    balance : 200,
    colors : ["black", "white"]
}


let str = JSON.stringify(p)
let p2 = JSON.parse(str)



console.log(p)
console.log(p2)


// p.balance = 1000
p2.balance = 1000

console.log(p)
console.log(p2)

