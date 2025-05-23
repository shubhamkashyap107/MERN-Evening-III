let arr = [10, 2, 55, -79, 102]

for(let i = 0; i < arr.length - 1; i++)
{
    for(let j = i + 1; j > 0; j--)
    {
        if(arr[j - 1] > arr[j])
        {
            let temp = arr[j - 1]
            arr[j - 1] = arr[j]
            arr[j] = temp
        }
    }
}

console.log(arr)