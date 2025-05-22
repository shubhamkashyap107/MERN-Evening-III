// let n = 4
// let stars = n
// let rows = n


// for(let i = 1; i <= rows; i++)
// {
//     let ans = ""

//     for(let j = 1; j <= stars; j++)
//     {
//         ans += "* "
//     }

//     console.log(ans)
// }






// for(let i = 1; i <= n; i++)
// {

//     let ans = ""

//     for(let j = 1; j <= n; j++)
//     {
//         ans += "* "
//     }

//     console.log(ans)

// }







// *
// * *
// * * * 
// * * * * 



// let n = 4
// let rows = n
// let stars = 1


// for(let i = 1; i <= rows; i++)
// {
//     let str = ""

//     for(let j = 1; j <= stars; j++)
//     {
//         str += "* "
//     }
//     stars++
//     console.log(str)
// }











// for(let i = 1; i <= n; i++)
// {
//     let str = ""

//     for(let j = 1; j <= i; j++)
//     {
//         str += "* "
//     }

//     console.log(str)

// }



// * * * * 
// * * *  
// * *  
// * 

// let n = 4
// for(let i = 1; i <= n; i++)
// {
//     let str = ""
//     for(let j = 1; j <= n - i + 1; j++)
//     {
//         str += "* "
//     }
//     console.log(str)
// }


// let n = 4
// for(let i = n; i >= 1; i--)
// {
//     let str = ""
//     for(let j = 1; j <= i; j++)
//     {
//         str += "* "
//     }
//     console.log(str)
// }











// let n = 4
// let stars = n
// let rows = n



// for(let i = 1; i <= rows; i++)
// {
//     let str = ""

//     for(let j = 1; j <= stars; j++)
//     {
//         str += "* "
//     }
//     stars--
//     console.log(str)
// }




// let n = Number(prompt("Enter a number"))
// let spaces = n - 1
// let stars = 1


// for(let i = 1; i <= n; i++)
// {
//     let str = ""

//     for(let j = 1; j <= spaces; j++)
//     {
//         str += "  "
//     }

//     for(let k = 1; k <= stars; k++)
//     {
//         str += "* "
//     }

//     spaces--
//     stars++
//     console.log(str)
// }



let n = 5


let stars = n
let spaces = 0

for(let i = 1; i <= n; i++)
{
    let str = ""

    for(let j = 1; j <= spaces; j++)
    {
        str += "  "
    }

    for(let k = 1; k <= stars; k++)
    {
        str += "* "
    }
    stars--
    spaces++
    console.log(str)
}