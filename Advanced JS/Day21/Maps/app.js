// const map = new Map()

// map.set("name", "shubham")
// map.set("age", 25)
// map.set("name" , "xyz")

// console.log(map)
// console.log(map.get("name"))
// console.log(map.get("age"))
// console.log(map.get("qwerty"))
// console.log(map.has("age"))
// console.log(map.has("name"))
// console.log(map.has("qwerty"))
// map.delete("name")
// map.clear()
// console.log(map.size)



// map.forEach((val, key) => {
//     console.log(key)
// })




// let map = new Map([
    //     ["name", "shubham"]
    // ])
    




// let arr = [1,2,3,4,1,2,3,1]
// let map = new Map()

// for(let item of arr)
// {
//     if(map.has(item))
//     {
//         map.set(item, map.get(item) + 1)
//     }
//     else
//     {
//         map.set(item, 1)
//     }
// }





let arr = [1,2,3,4,1,2,3,1]
let map = new Map()

for(let item of arr)
{
    map.set(item, (map.has(item) ? map.get(item) + 1 : 1))
}



console.log(map)