
// console.log("Pakode banao")


// for(let i = 0; i < 9999999999; i++)
// {

// }
// console.log("Ketchup Agyi")



// console.log("Pakode Khao")







// console.log("Pakode banao")

// setTimeout(() => {
//     console.log("Ketchup Agyi")
// }, 0)

// console.log("Pakode Khao")






// setTimeout(() => {
//     console.log("ONE")
// }, 2000)

// setTimeout(() => {
//     console.log("TWO")
// }, 4000)






// setTimeout(() => {
//     console.log("ONE")

//         setTimeout(() => {
//             console.log("TWO")
//         }, 4000)

// }, 2000)





// const id = setTimeout(() => {
//     console.log("Set timeout chala")
// }, 2500)


// clearTimeout(id)



// setTimeout(() => {
//     console.log("A")
// }, 2000)

// setTimeout(() => {
//     console.log("B")
// }, 2000)



let count = 1

const id = setInterval(() => {
    count++
    console.log("OK")
    if(count == 10)
    {
        clearInterval(id)
    }
}, 500)

