function quickSort(arr)
{
    if(arr.length <= 1)
    {
        return arr
    }
    let pivot = arr[arr.length - 1]
    let left = []
    let right = []

    for(let i = 0; i < arr.length - 1; i++)
    {
        if(arr[i] <= pivot)
        {
            left.push(arr[i])
        }
        else
        {
            right.push(arr[i])
        }
    }

    let leftSortedArray = quickSort(left)
    let rightSortedArray = quickSort(right)

    let res = []
    for(let item of leftSortedArray)
    {
        res.push(item)
    }
    res.push(pivot)
    for(let item of rightSortedArray)
    {
        res.push(item)
    }

    return res
}




console.log(quickSort([9,8,7,6,5,4,3,2,1]))