// let day = 3

// switch(day)
// {
//     case 1:
//         console.log("Monday")
//         break
    
//     case 2:
//         console.log("Tuesday")
//         break

//     case 3:
//         console.log("Wedneday")
//         break

//     default:
//         console.log("Kuch bhi")
// }


// let day = 12

// switch(day)
// {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         console.log(31)
//         break

//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         console.log(30)
//         break

//     case 2:
//         console.log(28)
//         break

//     default:
//         console.log("Invalid Input")
// }




let marks = -100

switch(true) // expression
{
    case (marks > 90 && marks <= 100):
        console.log("A")
        break

    case (marks > 80 && marks <= 90):
        console.log("B")
        break

    case (marks > 70 && marks <= 80):
        console.log("C")
        break

    case (marks > 60 && marks <= 70):
        console.log("D")
        break

    case (marks < 60 && marks >= 0):
        console.log("Fail")
        break

    default:
        console.log("Invalid marks")
}

// let password = prompt("Please enter your password")

// switch("qwerty123")
// {
//     case password:
//         console.log("Correct password")
//         break;

//     default:
//         console.log("Incorrect password")
// }


// let n = 33

// switch(true)
// {
//     case (n % 2 == 0):
//         console.log("Even")
//         break

//     default:
//         console.log("Odd")
// }


let num = 42

switch(true)
{
    case(num > 0 && num % 2 == 0):
        console.log("Even, Positive")
        break

    case(num < 0 && num % 2 == 0):
        console.log("Even, Negative")
        break

    case(num < 0 && num % 2 != 0):
        console.log("Odd, Negative")
        break

    default:
        console.log("Odd, Positive")

}






