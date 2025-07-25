const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("P1 Resolved")
    }, 2000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(["Black", "White"])
    }, 3000)
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(["Cat", "Dog"])
    }, 5000)
})










// Promise.all([p1,p2,p3])
// .then((...arr) => {
//     for(let item of arr)
//     {
//         console.log(item)
//     }
// })
// .catch((err) => {
//     console.log(err)
// })

// Promise.all([p1,p2,p3])
// .then(([d1, d2, d3]) => {
//     console.log(d1)
//     console.log(d2)
//     console.log(d3)
// })


Promise.allSettled([p1,p2,p3])
.then(([d1,d2,d3]) => {
    console.log(d1)
    console.log(d2)
    console.log(d3)
})
// .catch((err) => {
//     console.log(err)
// })


// Promise.race([p1,p2,p3])
// .then((data) => {
//     console.log(data)
// })
// .catch((err) => {
//     console.log("dot catch chala" + err)
// })

// Promise.any([p1,p2,p3])
// .then((data) => {
//     console.log(data)
// })