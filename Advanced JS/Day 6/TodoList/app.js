const inputBar = document.getElementById("ip")
const textAreaBar = document.getElementById("ta")
const addTaskBtn = document.getElementById("btn")
const rightSideDiv = document.getElementById("right")



addTaskBtn.addEventListener("click", () => {
    if(inputBar.value == "" || textAreaBar.value == "")
    {
        alert("Inputs cannot be empty")
        return 
    }
    
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