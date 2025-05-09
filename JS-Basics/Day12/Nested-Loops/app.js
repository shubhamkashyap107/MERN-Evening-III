// // print table of n

// let n = 5

// for(let i = 1; i <= n; i++)
// {
//     let curr = i

//     for(let j = 1; j <= 10; j++)
//     {
//         console.log(`${curr} X ${j} = ${curr * j}`)
//     }

// }


// let a = 10
// let b = 22

// console.log("a is " + a)
// console.log("The value of a is ${a}")
// console.log(`The value of a is ${a} and the value of b is ${b}`)


// let n = prompt("Enter n")

// for(let i = 1; i <= n; i++)
// {

//     let str = ""
//     for(let j = 1; j <= n; j++)
//     {
//         str += "* "
//     }
//     console.log(str)

// }

// let i = 1
// while(i <= n)
// {
//     let str = ""
//     let j = 1

//     while(j <= n)
//     {
//         str += "* "
//         j++
//     }
//     console.log(str)
//     i++
// }







// let n = 7


// for(let i = 1; i <= n; i++)
// {
//     let str = ""
//     for(let j = 1; j <= n; j++)
//     {
//         // console.log("*")
//         // str += "* "
//         str += i + " "
//     }
//     console.log(str)
// }




// for(let i = 1; i <= n; i++)
//     {
//         let str = ""
//         for(let j = 1; j <= n; j++)
//         {
//             // console.log("*")
//             // str += "* "
//             str += j + " "
//         }
//         console.log(str)
//     }
    


// for(let i = 1; i <= n; i++)
// {
//     let str = ""
//     for(let j = 1; j <= n; j++)
//     {
//         // console.log("*")
//         // str += "* "
//         // str += j + " " 
//         str = j + " " + str
//     }
//     console.log(str)
// }




// let n = 4



// for(let i = 1; i <= n; i++)
// {
//     let str = ""

//     for(let j = 1; j <= n; j++)
//     {
//         str += i + " "
//     }

//     console.log(str)
// }

// for(let i = n; i >= 1; i--)
// {
//     let str = ""

//     for(let j = 1; j <= n; j++)
//     {
//         str += i + " "
//     }

//     console.log(str)
// }


let n = 9
// 4 4 4 4
// 3 3 3 3
// 2 2 2 2 
// 1 1 1 1 

for(let i = 1; i <= n; i++)
{
    let str = ""
    for(let j = 1; j <= n; j++)
    {
        str += n - i + 1  + " "
    }
    console.log(str)
}












