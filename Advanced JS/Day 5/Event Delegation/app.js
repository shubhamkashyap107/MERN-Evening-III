// const bodyTag = document.getElementById("body")
// const redBox = document.getElementById("red")
// const greenBox = document.getElementById("green")
// const pinkBox = document.getElementById("pink")
// const blueBox = document.getElementById("blue")
// const yellowBox = document.getElementById("yellow")
// const orangeBox = document.getElementById("orange")
// const blackBox = document.getElementById("black")
// const whiteBox = document.getElementById("white")
// const purpleBox = document.getElementById("purple")


// redBox.addEventListener("click", () => {
//     bodyTag.style.backgroundColor = "red"
// })

// greenBox.addEventListener("click", () => {
//     bodyTag.style.backgroundColor = "green"
// })

// pinkBox.addEventListener("click", () => {
//     bodyTag.style.backgroundColor = "pink"
// })

// blueBox.addEventListener("click", () => {
//     bodyTag.style.backgroundColor = "blue"
// })

// yellowBox.addEventListener("click", () => {
//     bodyTag.style.backgroundColor = "yellow"
// })

// orangeBox.addEventListener("click", () => {
//     bodyTag.style.backgroundColor = "orange"
// })

// blackBox.addEventListener("click", () => {
//     bodyTag.style.backgroundColor = "black"
// })

// whiteBox.addEventListener("click", () => {
//     bodyTag.style.backgroundColor = "white"
// })

// purpleBox.addEventListener("click", () => {
//     bodyTag.style.backgroundColor = "purple"
// })


const bodyTag = document.getElementById("body")
const box = document.getElementById("dabba")
box.addEventListener("click", (e) => {
    // console.log(e)
    // if(e.target.tagName == "DIV")
    // {
    //     bodyTag.style.backgroundColor = e.target.innerText
    // }

    if(e.target.tagName == "DIV")
    {
        bodyTag.style.backgroundColor = e.target.style.backgroundColor
    }
})