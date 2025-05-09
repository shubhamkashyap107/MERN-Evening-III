// let s = 999


// do{
//     console.log("Okay")
//     s++
// }
// while(s <= 10)




// let n = prompt("Enter your number")
// let start = 1

// do{

//     if(start % 5 == 0)
//     {
//         console.log(start)
//     }


//     start++
// }
// while(start <= n)




// let n = prompt("Enter your number")
// let start = 1
  
// do{
//     if(start % 5 == 0 && start % 3 == 0)
//     {
//         console.log("Fizzbuzz")
//     }
//     else if(start % 3 == 0)
//     {
//         console.log("Fizz")
//     }
//     else if(start % 5 == 0)
//     {
//         console.log("Buzz")
//     }
//     else
//     {
//         console.log(start)
//     }
//         start++
// }
// while(start <= n)





// for(let i = 1; i <= 10; i++)
// {
//     console.log(i)
// }


// for(let start = 1; start <= 100; start++)
// {
//     console.log("XYZ")
// }

// let n = prompt("Enter n")

// for(let i = n; i >= 1; i--)
// {
//     console.log(i)
// }






// let n = prompt("Enter n")


// for(let i = 1; i <= n; i++)
// {
//     if(i % 2 == 0)
//     {
//         console.log(i)
//     }
// }



// for(let i = 2; i <= n; i+=2)
// {
//     console.log(i)
// }

// for(let i = 1; i <= n; i+=2)
// {
//     console.log(i)
// }

// let start = Number(prompt("Enter starting number"))
// let end = Number(prompt("Enter ending number"))



// for(let i = start; i <= end; i++)
// {
//     console.log(i)
// }




// for(let i = start; i >= end; i--)
// {
//     console.log(i)
// }




// let n = 5
// let str = ""

// for(let i = 1; i <= n; i++)
// {
//     // console.log("*")
//     str += "*"
// }


// for(let i = 1; i <= n; i++)
// {
//     str += "*\n"
// }

// console.log(str)

// let str = "ABCD"
// let start = 0

// while(start < str.length)
// {
//     console.log(str[start])
//     start++
// }

let str = "atul" // luta

let start = 0
let ans = ""

while(start < str.length)
{
    // ans += str[start]
    ans = str[start] + ans
    start++
}

console.log(ans)


// let start = str.length - 1
// let ans = ""

// while(start >= 0)
// {
//     ans += str[start] // ans = ans + str[start]
//     start--
// }

// console.log(ans)