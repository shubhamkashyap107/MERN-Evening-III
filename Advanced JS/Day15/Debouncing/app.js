const inputBar = document.querySelector("#ip")
function inputHandler(e)
{
    console.log("API called for : " + e.target.value)
}
function debounce(fn, timer)
{
    let timeoutId = null

    return (e) => {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
            fn(e)
        }, timer)
    }
}

const debouncedInputHandler = debounce(inputHandler, 5000)
inputBar.addEventListener("input", debouncedInputHandler)
