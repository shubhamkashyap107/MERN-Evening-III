n = 4

for(let i = 0; i < n; i++)
{
    let str = ""

    for(let j = 0; j <= i; j++)
    {
        str += String.fromCharCode(j + 65) + " "
    }

    console.log(str)
}