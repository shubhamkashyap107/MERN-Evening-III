// const btn = document.querySelector("button")
// const cardContainer = document.getElementById("container")



// btn.addEventListener("click", () => {
//     fetch("https://randomuser.me/api/")
//     .then((res) => {
//         cardContainer.innerHTML = ""
//         return res.json()
//     })
//     .then((data) => {
//         let imgTag = document.createElement("img")
//         let textContainer = document.createElement("div")
//         let nameTag = document.createElement("p")
//         let emailTag = document.createElement("p")
//         let card = document.createElement("div")

//         imgTag.src = data.results[0].picture.large
//         nameTag.innerText = data.results[0].name.title + " " + data.results[0].name.first + " " + data.results[0].name.last
//         emailTag = data.results[0].email
//         textContainer.appendChild(nameTag)
//         textContainer.append(emailTag)
//         card.appendChild(imgTag)
//         card.appendChild(textContainer)
//         cardContainer.appendChild(card)
//     })
// })






let arr = [1,2,3,4,5,6,6,7,8,9,9,10] // map, filter, find


let sqArr = arr.map((item) => {
    return item ** 2
})


let evenArr = arr.filter((item) => {
    return item % 2 == 0
})


let ans = arr.find((item) => {
    return item == 11
})


console.log(sqArr)
console.log(evenArr)
console.log(ans)
















