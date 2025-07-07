let outer = document.getElementById("outer")
let middle = document.getElementById("middle")
let inner = document.getElementById("inner")

outer.addEventListener("click", () => {
    console.log("Outer Div Clicked")
}, true)


middle.addEventListener("click", () => {
    console.log("Middle Div Clicked")
}, true)


inner.addEventListener("click", () => {
    console.log("Inner Div Clicked")
}, false)