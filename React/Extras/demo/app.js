const btn = document.getElementById("btn")

btn.addEventListener("click", (e) => {
    console.log(e)
    if(e.isTrusted == false)
    {
        return
    }
    console.log("API CALL")
})



// Attacker
for(let i = 0; i < 999; i++)
{
    btn.click()
}

