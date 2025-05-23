let arr1 = [11,22,33,101,500]
let arr2 = [1,30,53,102]


let i = 0
let j = 0
let ans = []

while(i < arr1.length && j < arr2.length)
{
    if(arr1[i] < arr2[j])
    {
        ans.push(arr1[i])
        i++
    }
    else
    {
        ans.push(arr2[j])
        j++
    }
}

if(i < arr1.length)
{
    for(let k = i; k < arr1.length; k++)
    {
        ans.push(arr1[k])
    }
}
else if(j < arr2.length)
{
    for(let k = j; k < arr2.length; k++)
    {
        ans.push(arr2[k])
    }
}


console.log(ans)

