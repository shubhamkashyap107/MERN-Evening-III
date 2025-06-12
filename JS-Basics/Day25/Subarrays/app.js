// printing all possible subarrays
// let arr = [1,2,3,4,5]


// for(let i = 0; i < arr.length; i++)
// {
//     let temp = []
//     for(let j = i; j < arr.length; j++)
//     {
//         temp.push(arr[j])
//         console.log(temp)
//     }
// }



// function solve(arr, n, s) {
//   // Write your code here
//   for(let i = 0; i <= arr.length - n; i++)
//   {
//     let temp = []

//     for(let j = i; j < i + n; j++)
//     {
//       temp.push(arr[j])
//     }
//     let sum = 0
//     for(let item of temp)
//     {
//       sum += item
//     }

//     if(sum == s)
//     {
//       console.log("YES")
//       return
//     }
//   }
//   console.log("NO")
// }



let n = 6

// for(let i = 1; i <= n; i++)
// {
//     let row = ""
//     for(let j = 1; j <= i; j++)
//     {
//         // row += "* "
//         if(j % 2 == 0)
//         {
//             row += "0 "
//         }
//         else
//         {
//             row += "1 "
//         }
//     }
//     console.log(row)
// }



// for(let i = 1; i <= n; i++)
// {
//     let row = ""
//     let val = 1
//     for(let j = 1; j <= i; j++)
//     {
//         row += val
//         val = (val == 1 ? 0 : 1)
//         // if(val == 1)
//         // {
//         //     val = 0
//         // }
//         // else
//         // {
//         //     val = 1
//         // }
//     }
//     console.log(row)
// }


// let val = 1
// for(let i = 1; i <= n; i++)
// {
//     let row = ""
//     for(let j = 1; j <= i; j++)
//     {
//         row += val
//         if(val == 1)
//         {
//             val = 0
//         }
//         else
//         {
//             val = 1
//         }
//     }
//     console.log(row)
// }




let arr = [101,1,2,3,4,5]
let max = -Infinity
let sMax = -Infinity

for(let item of arr)
{
    if(item > max)
    {
        sMax = max
        max = item
    }
    if(item > sMax && item < max)
    {
        sMax = item
    }
}


// for(let item of arr)
// {
//     if(item > max)
//     {
//         max = item
//     }
// }
// for(let item of arr)
// {
//     if(item > sMax && item < max)
//     {
//         sMax = item
//     }
// }


console.log(sMax)