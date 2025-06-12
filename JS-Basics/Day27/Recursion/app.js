function xPowerN(x, n) {
    if(n == 0)
    {
        return 1
    }

  return x * xPowerN(x , n - 1)
}


console.log(xPowerN(2,3))