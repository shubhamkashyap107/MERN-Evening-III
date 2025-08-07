const btn = document.querySelector("button")

const btnClickHandler = () => {
    document.body.style.backgroundColor =  `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`
}

function getRandomNumber()
{
    return Math.floor(Math.random() * 255)
}

function throttle(fn , delay)
{

    let prev = 0
    return function()
    {
        let now = Date.now()

        if(now - prev >= delay)
        {
            fn()
            prev = now
        }
    }
}


const throttledBtnClickHandler = throttle(btnClickHandler, 2000)
btn.addEventListener("click", throttledBtnClickHandler)
