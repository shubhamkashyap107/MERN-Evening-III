// function parent()
// {
//     var a = 20
//     return function(){
//         console.log(a)
//     }
// }
// var fn = parent()
// fn()



// function outer()
// {
//     var a = "qwerty"
//     function inner()
//     {
//         console.log(a)
//     }
//     return inner
// }
// let fn = outer()
// fn()





// counter application


// function counter(operation)
// {
//     var count = 0

//     if(operation == "inc")
//     {
//         return function()
//         {
//             count++
//             console.log(count)
//         }
//     }
//     else if(operation == "dec")
//     {
//         return function()
//         {
//             count--
//             console.log(count)
//         }
//     }
//     else if(operation == "res")
//     {
//         return function(){
//             count = 0
//             console.log(count)
//         }
//     }
    
// }


//  var increment = counter("inc")
//  var decrement = counter("dec")
//  var reset = counter("res")



//  increment()
//  increment()
//  increment()
//  increment()
//  increment()
//  decrement()
//  decrement()
//  decrement()
//  reset()


















// var increment = counter()

// increment()
// increment()
// increment()
// increment()
// increment()












function counter()
{
    var count = 0
    return {
        increment : () => {
            count++
            console.log(count)
        },
        decrement : () => {
            if(count == 0)
            {
                console.log(count)
                return
            }
            count--
            console.log(count)
        },
        reset : () => {
            count = 0
            console.log(count)
        }
    }
}


let counterObj = counter()

counterObj.decrement()
counterObj.decrement()
counterObj.decrement()
counterObj.decrement()