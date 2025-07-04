// function revStr(str)
// {
//     if(str.length == 0)
//     {
//         return ""
//     }

//     return revStr(str.slice(1)) + str[0]

// }


// console.log(revStr("abcd"))





function revStr(str, idx)
{
    if(idx == str.length)
    {
        return ""
    }
    return revStr(str, idx + 1) + str[idx]
}


console.log(revStr("abcd", 0))