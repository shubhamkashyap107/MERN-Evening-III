// let arr = [1,2,3]

// console.log(arr)
// console.log(...arr)


// let arr1 = [1,2,3]
// let arr2 = [4,5,6]

// let newArr = arr1.concat(arr2)
// console.log(newArr)

// let newArr = [...arr1,...arr2]
// console.log(newArr)






// let obj = {
//     name : "Shubham"
// }

// let obj2 = {
//     name : "Kashyap",
//     age : 25
// }



// let newObj = {
//     ...obj2,
//     ...obj
// }

// console.log(newObj)




// function sum(a, b, c, d, e, f, g, h, i, j)
// {
//     console.log(a + b + c + d + e + f+ g + h + i + j)
// }


// let arr = [1,3,2,4,6,4,2,45,2,2]
// // sum(11,22)
// sum(...arr)




// rest

// let obj = {
//     name : "SHubham",
//     age : 25
// }

// console.log(obj.age)
// console.log(obj["age"])

// let{age, name} = obj // destructuring
// console.log(age, name)


// function logArguments(firstArg, ...arr) {
//     console.log(firstArg);
//     console.log(arr); 
// }
// logArguments('a', 'b', 'c', 'd'); 










let arr = [1,2,3,4,5]

// const[...b] = arr
const[a,b,...op] = arr

console.log(a)
console.log(b)
console.log(op)












// let obj = {a : 1, b : 2, c : 3, d : 4}

// const{d,c, ...y} = obj
// console.log(c)
// console.log(d)
// console.log(y)


// let obj = {
//     names : "XYZ",
//     age : 22
// }

// const {names : naam, age : umar} = obj
// // console.log(names, age)
// console.log(naam, umar)