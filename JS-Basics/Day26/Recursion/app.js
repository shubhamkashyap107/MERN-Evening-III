// function random(n)
// {
//     if(n > 5)
//     {
//         return
//     }
//     console.log(n)
//     random(n+1)
// }
// random(1)


// function random(n)
// {
//     if(n > 5)
//     {
//         return
//     }
//     random(n+1)
//     console.log(n)
// }
// random(1)





// function fact(n)
// {
//     if(n == 0)
//     {
//         return 1
//     }
//     return n * fact(n - 1)
// }


// let ans = fact(5)
// console.log(ans)

// let n = 5

// function NumberSum(N) {
//   if(N == 0)
//   {
//     return 0
//   }

//     return N + NumberSum(N - 1)
// }

// console.log(NumberSum(n))






function printtillN() {

    helper(5, "")
 
}

printtillN()


function helper(n, str)
{
    if(n == 1)
    {
        console.log(str + " " + n)
        return
    }

    helper(n - 1, str + " " + n)
}
