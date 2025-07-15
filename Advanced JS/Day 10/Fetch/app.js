const api = "https://hp-api.onrender.com/api/characters"
const grid = document.getElementById("grid")
// fetch("https://hp-api.onrender.com/api/characters")

const data = fetch(api)

data
.then((val) => {
    let ans = val.json()
    return ans
})
.then((finalData) => {
    // console.log(finalData)

    for(let item of finalData)
    {
        // console.log(item)
        let card = document.createElement("div")
        card.setAttribute("id", "card")
        let image = document.createElement("img")
        image.setAttribute("id", "image")
        let name = document.createElement("p")
        name.setAttribute("id", "name")


        image.src = item.image || "https://ik.imagekit.io/hpapi/harry.jpg"
        name.innerText = item.name

        card.appendChild(image)
        card.appendChild(name)

        grid.appendChild(card)
    }
})