// let start = 2
// let isPrime = true

// while(start * start <= n)
// {
//     if(n % start == 0)
//     {
//         isPrime = false
//         console.log(n + " is not a prime number")
//         break
//     }
//     start++
// }

// if(isPrime == true)
// {
//     console.log(n + " is a prime number")
// }







function SumofDigits(n) {

    let sum = 0
    while(n > 0)
    {
        let lastDigit = n % 10
        sum += lastDigit
        n = Math.floor(n / 10)
        console.log(sum)
    }


}

