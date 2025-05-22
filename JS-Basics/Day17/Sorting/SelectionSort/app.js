let arr = [6,1,5,2,3,4]

for(let i = 0; i < arr.length - 1; i++)
{
    let minIdx = i

    for(let j = i; j < arr.length; j++)
    {
        if(arr[j] < arr[minIdx])
        {
            minIdx = j
        }
    }

    let temp = arr[i]
    arr[i] = arr[minIdx]
    arr[minIdx] = temp
}


console.log(arr)