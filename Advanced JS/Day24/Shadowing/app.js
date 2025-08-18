// let a = 10



// function example()
// {
//     // let a = 22
//     console.log(a)
// }


// example()


var a = 10
function outer()
{

    var a = "ABC"

    function middle()
    {
        var a = "DEF"

        function inner()
        {
            var a = "XYZ"
            console.log(a)
        }
        console.log(a)
        inner()
    }
    console.log(a)
    middle()
}

outer()