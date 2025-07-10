// const myBtn = document.getElementById("btn")
// let heading = document.getElementById("tag")

// function btnCLickHandler()
// {

// }

// myBtn.addEventListener("click", btnCLickHandler)




// myBtn.addEventListener("click", () => {
//     // console.log("Btn Clicked")
//     // alert("Btn CLicked")
//     heading.style.color = "red"
// })


// heading.addEventListener("dblclick", () => {
//     // heading.style.border = "5px solid red"
//     if(heading.style.border == "")
//     {
//         heading.style.border = "5px solid red"
//     }
//     else
//     {
//         heading.style.border = ""
//     }
// })




const sidebar = document.getElementById("sidebar")
const spans = document.getElementsByClassName("text")


sidebar.addEventListener("mouseenter", () => {
    sidebar.style.width = "20vw"
    for(let item of spans)
    {
        item.style.display = "inline"
    }
})


sidebar.addEventListener("mouseleave", () => {
    sidebar.style.width = "2vw"
    for(let item of spans)
    {
        item.style.display = "none"
    }
})












