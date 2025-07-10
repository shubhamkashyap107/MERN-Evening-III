const inputBar = document.getElementById("ip")
const textAreaBar = document.getElementById("ta")
const addTaskBtn = document.getElementById("btn")
const rightSideDiv = document.getElementById("right")
// localStorage.setItem("todos", JSON.stringify([]))

let existingTodosStr = localStorage.getItem("todos")
let existingTodos = JSON.parse(existingTodosStr)
for(let item of existingTodos)
{
    const card = document.createElement("div")
    const taskTitle = document.createElement("h2")
    const taskDesc = document.createElement("p")
    const textWrapper = document.createElement("div")
    let deleteBtn = document.createElement("button")

    card.setAttribute("id", "card")
    taskTitle.setAttribute("id", "title")
    taskDesc.setAttribute("id", "desc")
    textWrapper.setAttribute("id", "tw")
    deleteBtn.setAttribute("id", "delBtn")


    deleteBtn.addEventListener("click", () => {
        delTodo(item.title)
        card.remove()
    })

    taskTitle.innerText = item.title
    taskDesc.innerText = item.desc

    textWrapper.appendChild(taskTitle)
    textWrapper.appendChild(taskDesc)

    card.appendChild(textWrapper)
    deleteBtn.innerText = "🗑️"
    card.appendChild(deleteBtn)

    rightSideDiv.appendChild(card)

}


function delTodo(todoTitle)
{
    console.log(todoTitle)
    let arr = JSON.parse(localStorage.getItem("todos"))
    let temp = []

    for(let item of arr)
    {
        if(item.title != todoTitle)
        {
            temp.push(item)
        }
    }

    localStorage.setItem("todos", JSON.stringify(temp))
}


addTaskBtn.addEventListener("click", () => {
    if(inputBar.value == "" || textAreaBar.value == "")
    {
        alert("Inputs cannot be empty")
        return 
    }
    
    let strArr = localStorage.getItem("todos")
    let arr = JSON.parse(strArr)

    let obj = {
        title : inputBar.value,
        desc : textAreaBar.value
    }

    arr.push(obj)
    localStorage.setItem("todos", JSON.stringify(arr))



    const card = document.createElement("div")
    const taskTitle = document.createElement("h2")
    const taskDesc = document.createElement("p")
    const textWrapper = document.createElement("div")
    let deleteBtn = document.createElement("button")

    deleteBtn.addEventListener("click", () => {
        delTodo(obj.title) 
        card.remove()
    })


    card.setAttribute("id", "card")
    taskTitle.setAttribute("id", "title")
    taskDesc.setAttribute("id", "desc")
    textWrapper.setAttribute("id", "tw")
    deleteBtn.setAttribute("id", "delBtn")

    taskTitle.innerText = inputBar.value
    taskDesc.innerText = textAreaBar.value

    textWrapper.appendChild(taskTitle)
    textWrapper.appendChild(taskDesc)

    card.appendChild(textWrapper)
    deleteBtn.innerText = "🗑️"
    card.appendChild(deleteBtn)

    rightSideDiv.appendChild(card)

    inputBar.value = ""
    textAreaBar.value = ""

}) // HOF



// let deletBtns = document.querySelectorAll("#delBtn")


// for(let item of deletBtns)
// {
//     item.addEventListener("click", () => {
//         item.remove()
//     })
// }