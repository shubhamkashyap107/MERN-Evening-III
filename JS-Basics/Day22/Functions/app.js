function hello()
{
    console.log("Hello world")
}

// hello() // invoke, run , call


// function abc(name, age)
// {
//     console.log(`Hello my name is ${name} and my age is ${age}`)
//     return false
// }


// let retVal = abc("Hi", 23)
// console.log(retVal)


// abc("Sheru", 10)
// abc("Tom", 10)
// abc("Jerry", 10)
// abc("Pinku", 10)






// function testing()
// {
//     console.log("Testing function chala")
//     // return undefined
//     // return "abc"
// }

// let val = testing()
// console.log(val)




//functional expressions

// const myFn = function(name, age){
//     // console.log("Hello from the function")
//     console.log(name, age)
//     return function(){
//         console.log("Hi")
//     }
// }


// let val = myFn("qwerty", 32)
// console.log(val)
// val()
// abc()


// Arrow Functions
// let myFn = (name, age) => {
//     // console.log("Hello from arrow function")
//     console.log(name, age)
//     return "hi"
// }


// let val = myFn("abc", 12)
// console.log(val)

// let fn = name => {
//     console.log(name)
// }

// let fn = name => console.log("OK")
// let fn = name => "QWERTY"
// let fn = name => ("QWERTY")
// let val = fn()
// console.log(val)


// function abc()
// {
//     console.log("Hello from first abc")
// }
// function abc(name = "Shubham", age = 25)
// {
//     console.log(name, age)
// }
// abc()
// abc("qwerty", 32)
// abc("qwerty")
// abc("asdfghj", 23, true, [])

// function sum(a, b)
// {
//     let sum = a + b
//     return sum
// }


// let val = sum(1,2)
// console.log(val)


function check(n)
{
    if(n % 2 == 0)
    {
        return "is a even number"
    }
    else
    {
        return "is a odd number"
    }
}

// let val = check(10)
// console.log(val)


// console.log(check(11))



// function calculate(l, b)
// {
//     return l * b
// }


// console.log(calculate(10,20))



function max(a, b)
{
    return Math.max(a,b)
}

// console.log(max(101,99))



function capitalise(str)
{
    return str.toUpperCase()
}

console.log(capitalise("qwerty"))

