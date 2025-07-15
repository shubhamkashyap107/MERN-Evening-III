// let p1 = new Promise((resolve, reject) => {
//     const data = false
//     if(data == true)
//     {
//         resolve("Promise Resolved")
//     }
//     else
//     {
//         reject("Promise Rejected hello how are you")
//     }
// })
// console.log(p1)



let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello Ji")
    }, 5000)
})
console.log(p1)




async function abc()
{
    console.log("OK")
}

console.log(abc())

