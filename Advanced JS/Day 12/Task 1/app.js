const myGrid = document.getElementById("grid")


// window.addEventListener("load", () => {
//     fetch("https://dragonball-api.com/api/characters")
//     .then((res) => {
//         return res.json()
//     })
//     .then((data) => {
//         console.log(data)

//         for(let item of data.items)
//         {
//             const card = document.createElement("div")
//             const imageTag = document.createElement("img")
//             const name = document.createElement("p")

//             imageTag.src = item.image
//             name.innerText = item.name

//             card.appendChild(imageTag)
//             card.appendChild(name)

//             myGrid.appendChild(card)
//         }
//     })
// })

// window.addEventListener("load", () => {
//     async function getData()
//     {
//         const retVal =  await fetch("https://dragonball-api.com/api/characters")
//         const data = await retVal.json()
//         for(let item of data.items)
//         {
//             const card = document.createElement("div")
//             const imageTag = document.createElement("img")
//             const name = document.createElement("p")

//             imageTag.src = item.image
//             name.innerText = item.name

//             card.appendChild(imageTag)
//             card.appendChild(name)

//             myGrid.appendChild(card)
//         }
//     }
//     getData()
// })


window.addEventListener("load", () => {
    async function getData()
    {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await res.json()

        for(let item of data)
        {
            let card = document.createElement("div")
            let name = document.createElement("p")
            let username = document.createElement("p")
            let email = document.createElement("p")

            name.innerText = item.name
            username.innerText = item.username
            email.innerText = item.email

            card.appendChild(name)
            card.appendChild(username)
            card.appendChild(email)

            myGrid.appendChild(card)
        }
    }
    getData()
})