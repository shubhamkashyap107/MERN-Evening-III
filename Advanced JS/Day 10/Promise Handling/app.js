// let p1 = new Promise((resolve, reject) => {
//     let data = false
//     let arr = [{name : "Shubham"}, {name : "Vision"}, {name : "Haathi"}]

//     if(data)
//     {
//         resolve(arr)
//     }
//     else
//     {
//         reject("Not Okay")
//     }
// })


// p1
// .then((d) => {
//     // console.log("Promise Resolved")
//     console.log(d)
// })
// .catch(() => {
//     console.log("Promise Rejected")
// })
// .finally(() => {
//     console.log("Finaly chala")
// })







// let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve([1,2,3,4,5,6])
//     }, 5000)
// })

// p2
// .then((arr) => {
//     console.log(arr)
// })
// .catch(() => {
//     console.log("Promise failed")
// })
// .finally(() => {
//     console.log("Finally chala")
// })