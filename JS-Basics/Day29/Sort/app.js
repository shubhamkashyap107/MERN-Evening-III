// let arr = [8,6,4,1,101,-10,0]
// arr.sort()
// console.log(arr)

// let arr = [-10,0,1,11,12,8,9]
// arr.sort()
// console.log(arr)

// let arr = [-10,0,1,11,12,8,9]
// arr.sort(function(a,b){
//     return a - b
// })

// arr.sort(function(a,b){
//     return b - a
// })
// console.log(arr)


// let arr = [1,2,3,4,1,2,3,1,2,1]
// let obj = {}

// for(let item of arr)
// {
//     if(obj[item])
//     {
//         obj[item] = obj[item] + 1
//     }
//     else
//     {
//         obj[item] = 1
//     }
// }


// console.log(obj)




var maxDifference = function(str) {
    let obj = {}
    for(let i = 0; i < str.length; i++)
    {
        if(obj[str[i]])
        {
            obj[str[i]] = obj[str[i]] + 1
        }
        else
        {
            obj[str[i]] = 1
        }
    }

    let gEven = -Infinity
    let gOdd = -Infinity
    let sEven = Infinity
    let sOdd = Infinity


    for(let item in obj)
    {
        if(obj[item] % 2 == 0)
        {
            gEven = Math.max(gEven, obj[item])
            sEven = Math.min(gEven, obj[item])
        }
        else
        {
            gOdd = Math.max(gOdd, obj[item])
            sOdd = Math.min(gOdd, obj[item])
        }

    }

    let v1 = Math.abs(gEven - sOdd)
    let v2 = Math.abs(gOdd - sEven)
    return v1 > v2 ? v1 : v2
};

console.log(maxDifference("aaaaabbc"))