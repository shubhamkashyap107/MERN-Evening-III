let arr = [1,9,3,8,5]
let x = 18
let isXPresent = false

for(let i = 0; i < arr.length; i++)
{
    if(arr[i] == x)
    {
        isXPresent = true
        console.log(i)
        break
    }
}

if(isXPresent == false)
{
    console.log(-1)
}