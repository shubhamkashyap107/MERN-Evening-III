const btn = document.getElementById("btn")
const imgTag = document.getElementById("img")



btn.addEventListener("click", () => {
    fetch("https://api.thecatapi.com/v1/images/search")
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        console.log(data)
        imgTag.src = data[0].url
    })
})


window.addEventListener("load", () => {
    console.log("Website Loaded")
})