const button = document.getElementById("btn")
const body = document.querySelector("body")
const div = document.getElementById('box')


// button.addEventListener("click", () => {
//     body.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)},
//     ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
// })



// setInterval(() => {
//         body.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)},
//     ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
// }, 1000)

setInterval(() => {
    div.style.top = `${Math.floor(Math.random() * 90)}vh`
    div.style.left = `${Math.floor(Math.random() * 90)}vw`
}, 2000)