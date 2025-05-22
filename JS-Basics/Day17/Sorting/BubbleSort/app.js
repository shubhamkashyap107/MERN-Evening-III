let arr = [5,3,4,1,2] // 33,22,11,7,0,-10




// for(let i = 0; i < arr.length - 1; i++)
// {

//     for(let j = 0; j < arr.length - 1; j++)
//     {
//         console.log("OK")
//         if(arr[j] > arr[j + 1])
//         {
//             let temp = arr[j]
//             arr[j] = arr[j + 1]
//             arr[j + 1] = temp

//         }
//     }

// }



// for(let i = 0; i < arr.length - 1; i++)
// {

//     for(let j = 0; j < arr.length - 1 - i; j++)
//     {
//         console.log("OK")
//         if(arr[j] > arr[j + 1])
//         {
//             let temp = arr[j]
//             arr[j] = arr[j + 1]
//             arr[j + 1] = temp

//         }
//     }
// }


for(let i = 0; i < arr.length - 1; i++)
{
    let isSwappingDone = false
    for(let j = 0; j < arr.length - 1 - i; j++)
    {
        console.log("OK")
        if(arr[j] < arr[j + 1])
        {
            let temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp
            isSwappingDone = true
        }
    }
    if(isSwappingDone == false)
    {
        break
    }
}

console.log(arr)