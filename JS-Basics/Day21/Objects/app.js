// let obj = {name : "Shubham",age : 25,isPresent : true}
// console.log(obj)

// let arr = [1,2,3,4,"ANS"]
// console.log(arr[4])

// let obj = {
//     name : "Shubham",
//     age : 25,
//     isPresent : true
// }
// console.log(obj)

// console.log(obj.name)
// console.log(obj.age)
// console.log(obj.isPresent)


// console.log(obj["name"])
// console.log(obj["age"])
// console.log(obj["isPresent"])







// adding & deleting properties of an object

// let obj = {}
// console.log(obj)

// obj.legs = 2
// console.log(obj)

// obj["fur"] = true
// console.log(obj)

// delete obj.fur
// console.log(obj)

// delete obj["legs"]
// console.log(obj)





// looping


let obj = {
    name : "Shubham",
    age : 25,
    isHandsome : true
}
// for(let item of obj)
// {
//     console.log(item)
// }

for(let item in obj)
{
    // console.log(item)
    // console.log(obj.item)
    console.log(obj[item])
}

