function outer(a)
{
    console.log("Hello from Outer Fn")
    // console.log(a)
    // a()
    function inner()
    {
        console.log("Hello from Inner Fn")
    }
    return inner

}

function sample()
{
    console.log("Hello from Sample Fn")
}

let val = outer(sample)
// console.log(val)
val()

