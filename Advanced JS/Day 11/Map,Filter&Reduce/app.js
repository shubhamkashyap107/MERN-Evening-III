// let arr = [1,2,3,4,5,6,7,8,9,10] // [1,4,9,16....]


// const data = arr.map((item) => {
//     return item ** 2
// })

// const data2 = arr.map((item) =>{
//     return item % 2 == 0 ? "Even" : "Odd"

//     // if(item % 2 == 0)
//     // {
//     //     return "Even"
//     // }
//     // else
//     // {
//     //     return "Odd"
//     // }
// })


// console.log(arr.__proto__)
// console.log(data)
// console.log(data2)







// let arr2 = []

// for(let item of arr)
// {
//     arr2.push(item * item)
// }

// console.log(arr2)







// filter

// let arr = [1,4,5,33,12,90,66,45]
// let names = ["Akash", "Sumit", "Harsh", "Priyanshu", "Yug", "Om"]

// const nums = arr.filter((item) => {
//     // return item % 3 == 0
//     // return true
//     return false
// })

// const nums2 = arr.filter((item) => {
//     return item % 2 != 0
// })

// const n = names.filter((item) => {
//     return item.includes("a")
// })

// console.log(nums)
// console.log(nums2)
// console.log(n)




// reduce
// let arr = [1,2,3,4,5]
// let sum = arr.reduce((acc, curr) => {
//     return acc + curr
// }, 10)
// console.log(sum)

// let arr2 = ["a","e","i","o","u"]
// let str = arr2.reduce((acc, curr) => {
//     return acc + curr
// })
// console.log(str)


// let arr3 = [3,4,5,6,7]
// let ans = arr3.reduce((acc, curr) => {
//     return acc * curr
// })
// console.log(ans)






// indexes
// let arr = [11,12,13,14,15,16]

// let a1 = arr.map((item, index) => {
//     // console.log(item, index)
//     return index * 3
// })

// console.log(a1)


// let a2 = arr.filter((item, index) => {
//     return index % 2 == 0
// })

// console.log(a2)



// const users = [
//   {
//     id: 1,
//     name: "Aarav Mehta",
//     email: "aarav.mehta@example.com",
//     age: 28,
//     city: "Mumbai"
//   },
//   {
//     id: 2,
//     name: "Sara Kapoor",
//     email: "sara.kapoor@example.com",
//     age: 34,
//     city: "Delhi"
//   },
//   {
//     id: 3,
//     name: "Rohan Das",
//     email: "rohan.das@example.com",
//     age: 30,
//     city: "Bangalore"
//   },
//   {
//     id: 4,
//     name: "Priya Nair",
//     email: "priya.nair@example.com",
//     age: 27,
//     city: "Chennai"
//   },
//   {
//     id: 5,
//     name: "Kabir Sharma",
//     email: "kabir.sharma@example.com",
//     age: 32,
//     city: "Kolkata"
//   }
// ];

// let ans = users.find((item) => {
//     return item.age > 30
// })

// console.log(ans)


// let ans = users.filter((item) => {
//     return item.age > 30
// })

// console.log(ans)




// let arr = [9,6,4,1,8,2]


// arr.forEach((item, index) => {
//     console.log(item ** 2, index)
// })


// "qwerty".forEach((item) => {
//     console.log(item)
// })


for(let item of "qwertyu")
{
    console.log(item)
}