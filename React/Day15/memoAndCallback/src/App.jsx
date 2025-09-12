// import React, { useState, useMemo, useCallback } from 'react'

// const App = () => {
//   const[count, setCount] = useState(0)
//   const[num, setNum] = useState(1)


//   const findNthPrime = useCallback(  function (n) {

//     let count = 0; // To keep track of how many primes we've found
//     let num = 1;   // The number we are currently checking for primality

//     while (count < n) {
//       num++; // Increment to the next number to check

//       if (isPrime(num)) {
//         count++; // If it's prime, increment the count
//       }
//     }
//     return num; // Return the nth prime number found
//   }, [])


//   const isPrime = useCallback(  function(number) {
//     if (number <= 1) return false; // 1 and numbers less than 1 are not prime
//     if (number <= 3) return true;  // 2 and 3 are prime

//     // If divisible by 2 or 3, it's not prime
//     if (number % 2 === 0 || number % 3 === 0) return false;

//     // Check for primality from 5 onwards, skipping multiples of 2 and 3
//     for (let i = 5; i * i <= number; i += 6) {
//       if (number % i === 0 || number % (i + 2) === 0) {
//         return false;
//       }
//     }
//     return true;
//   }, []
// )


// // console.log(isPrime)

//   let ans = useMemo(() => (findNthPrime(num)), [num])
//   return (
//     <div>
//       <div>
//         <input value={num} onChange={(e) => {
//           setNum(e.target.value)
//         }} type="number" />
//         <h1>{ans}</h1>
//       </div>

//       <div>
//           <div>{count}</div>
//           <button onClick={() => {
//             setCount(count + 1)
//           }}>+</button>
//           <button onClick={() => {
//             setCount(0)
//           }}>Reset</button>
//           <button onClick={() => {
//             setCount(count - 1)
//           }}>-</button>
//       </div>

//     </div>
//   )
// }

// export default App




import React, { useCallback, useState } from 'react'

const App = () => {

  const[num, setNum] = useState(0)
  const[power, setPower] = useState(2)



  const powerOf = useCallback(function ()
  {
    return num ** power
  }, [num, power ])


  return (
    <div>

      <input onChange={(e) => {
        setPower(e.target.value)
      }} type="number" />

      <input onChange={(e) => {
        setNum(e.target.value)
      }} type="number" />


      <h1>{powerOf()}</h1>
    </div>
  )
}

export default App