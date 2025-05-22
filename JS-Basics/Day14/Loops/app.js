// let n = 5
// let spaces = Math.floor(n / 2)
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
//     if(i < n / 2)
//     {
//         stars += 2
//         spaces--
//     }
//     else
//     {
//         stars -= 2
//         spaces++
//     }
//     console.log(str)
// }



// n = 7
// let stars = n
// let spaces = 0
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
//     console.log(str)
//     if(i < n/2)
//     {
//         stars -= 2
//         spaces++
//     }
//     else
//     {
//         stars += 2
//         spaces--
//     }
// }


// let n = 5
// let spaces = 0

// for(let i = 1; i <= n; i++)
// {
//     let str = ""

//     for(let j = 1; j <= spaces; j++)
//     {
//         str += "  "
//     }

//     for(let k = 1; k <= n; k++)
//     {
//         str += "* "
//     }
//     console.log(str)
//     spaces++
// }






// let n = 5
// let stars = n
// let spaces = 0
// for(let i = 1; i <= n; i++)
// {
//     let str = ""

//     for(let k = 1; k <= spaces; k++)
//     {
//         str += "  "
//     }

//     for(let j = 1; j <= stars; j++)
//     {
//         str += "* "
//     }

//     console.log(str)
//     if(i < n / 2)
//     {
//         stars-=2
//         spaces+=2
//     }
//     else
//     {
//         stars+=2
//         spaces-=2
//     }
    
// }

// for(let i = 1; i <= n; i++)
// {
//     let str = ""

//     for(let j = 1; j <= stars; j++)
//     {
//         str += "* "
//     }

//     console.log(str)
//     if(i < n / 2)
//     {
//         stars-=2
//     }
//     else
//     {
//         stars+=2
//     }
    
// }

// let n = 3
// let stars = 1
// let spaces = 2 * n - 3


// for(let i = 1; i < 2 * n; i++)
// {
//     let str = ""

//     for(let j = 1; j <= stars; j++)
//     {
//         str += "* "
//     }


//     for(let k = 1; k <= spaces; k++)
//     {
//         str += "  "
//     }


//      for(let l = 1; l <= stars; l++)
//     {   
//         if(i == n && l == stars)
//         {
//             break
//         }
//         str += "* "
//     }


//     if(i < n)
//     {
//         stars++
//         spaces-=2
//     }
//     else
//     {
//         stars--
//         spaces+=2
//     }
//     console.log(str)


// }


// let n = 9
// let stars = 1
// let spaces = 2 * n - 3

// for(let i = 1; i <= n; i++)
// {
//     let str = ""

//     for(let j = 1; j <= stars; j++)
//     {
//         str += "* "
//     }


//     for(let k = 1;k <= spaces; k++)
//     {
//         str += "  "
//     }


//     for(let j = 1; j <= stars; j++)
//     {
//         if(i == n && j == stars)
//         {
//             break
//         }
//         str += "* "
//     }

//     spaces -= 2
//     stars++
//     console.log(str)
// }




let n = 5
let stars = n
let spaces = -1

for(let i = 1; i <= n; i++)
{
    let str = ""

    for(let j = 1; j <= stars; j++)
    {
        if(i == 1 && j == stars)
        {
            break
        }
        str += "* "
    }

    for(let k = 1; k <= spaces; k++)
    {
        str += "  "
    }

    for(let j = 1; j <= stars; j++)
    {
        str += "* "
    }


    stars--
    spaces += 2

    console.log(str)
}





























