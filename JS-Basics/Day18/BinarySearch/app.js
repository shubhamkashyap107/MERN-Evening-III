let arr = [2,4,6,8,10]
let x = 11

let s = 0
let e = arr.length - 1
// let isXPresent = false

while(s <= e)
{
    let mid = Math.floor((s + e) / 2)

    if(arr[mid] == x)
    {
        // isXPresent = true
        console.log(mid)
        break
    }
    else if(x > arr[mid])
    {
        s = mid + 1
    }
    else
    {
        e = mid - 1
    }
}


// if(isXPresent == false)
// {
//     console.log(-1)
// }

if(s > e)
{
    console.log(-1)
}