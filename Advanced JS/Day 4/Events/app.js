const inputTag = document.getElementById("ip")
const button = document.getElementById("btn")
const myList = document.getElementById("list")
const body = document.getElementById("body")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")

// inputTag.addEventListener("change", (e) => {
//     // console.log(e)
//     console.log(e.target.value)
// })


button.addEventListener("click", () => {
    let val = inputTag.value
    if(val == "")
    {
        alert("Input cannot be empty")
        return
    }       
    let listItem = document.createElement("li")
    listItem.innerText = val
    myList.appendChild(listItem)
    inputTag.value = ""
})

window.addEventListener("keydown", (e) => {
    if(e.key == "Enter")
    {
        let val = inputTag.value
        if(val == "")return        
        let listItem = document.createElement("li")
        listItem.innerText = val
        myList.appendChild(listItem)
        inputTag.value = ""
    }
})

window.addEventListener("scroll", (e) => {
    if(window.scrollY > 105)
    {
        body.style.backgroundColor = "black"
    }
    else
    {
        body.style.backgroundColor = "white"
    }
})

btn2.addEventListener("click", () => {
    window.scrollBy(
        {
            top : 3000,
            behavior : "smooth"
        }
    )
})


btn3.addEventListener("click", () => {
    window.scrollTo(0,0)
    window.location.reload()
})