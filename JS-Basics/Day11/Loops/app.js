// let n = 22

// for(let i = 1; i <= 10; i++)
// {
//     console.log(n + " X " + i + " = " + n * i)
// }


// let n = 5
// let sum = 0

// for(let i = 1; i <= n; i++)
// {
//     sum = sum + i
// }

// console.log(sum)



// let n = 15
// let sum = 0

// for(let i = 5; i <= n; i+=5)
// {
//     sum += i
// }
// console.log(sum)


// for(let i = 1; i <= n; i++)
// {
//     if(i % 5 == 0)
//     {
//         sum += i
//     }
// }

// console.log(sum)



// let str = "acciojob" // missisipi
// let target = "k" // i
// let count = 0

// for(let i = 0; i < str.length; i++)
// {
//     if(str[i] == target)
//     {
//         count++
//     }
// }

// console.log(count)


// let str = "sholay"
// let str2 = ""


// for(let i = str.length - 1; i >= 0; i--)
// {
//     str2 += str[i] // str2 = str2 + str[i]
// }

// for(let i = 0; i < str.length; i++)
// {
//     str2 = str[i] + str2
// }


// if(str == str2)
// {
//     console.log(true)
// }
// else
// {
//     console.log(false)
// }


// let n = 5
// let ans = 1

// for(let i = 2; i <= n; i++)
// {
//     ans *= i
// }


// console.log(ans)


// let n = 53 // from 2 to n - 1
// let isPrime = true

// for(let i = 2; i < n; i++)
// {
//     if(n % i == 0)
//     {
//         isPrime = false
//         break
//     }
// }

// if(isPrime == true)
// {
//     console.log("Prime Number")
// }
// else
// {
//     console.log("Not a prime number")
// }



// let n = 101
// let oddCount = 0
// let evenCount = 0


// for(let i = 1; i <= n; i++)
// {
//     if(i % 2 == 0)
//     {
//         evenCount++
//     }
//     else
//     {
//         oddCount++
//     }
// }

// console.log(oddCount)
// console.log(evenCount)

let n = 53

if(n % 2 == 0)
{
    console.log("This n has " + n / 2 + " even as well as odd numbers")
}
else
{
    let oddCount = Math.floor(n / 2) + 1
    let evenCount = Math.floor(n / 2)
    console.log("Even : " + evenCount + " and Odd : " + oddCount)
}
















