let arr = [99, 0, -10, 5, 910]
let max = arr[0]
let min = arr[0]

for(let i = 0; i < arr.length; i++)
{
    if(arr[i] > max)
    {
        max = arr[i]
    }
    if(arr[i] < min)
    {
        min = arr[i]
    }
}

console.log(max, min)