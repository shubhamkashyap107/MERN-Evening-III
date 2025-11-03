function sayHi()
{
    console.log("Hello Ji")
}

function sayHi2() {
    console.log("Namaste")
}

// module.exports = sayHi
// module.exports = sayHi2



module.exports = {
    fn : sayHi,
    fn2 : sayHi2
}