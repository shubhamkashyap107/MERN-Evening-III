// let regex = new RegExp("ab*c")
// let str = "Hello my name is abbc"
// console.log(regex.test(str))




const pword = prompt("Please Enter your password")
let regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,}$/


if(regex.test(pword))
{
    alert("Valid password")
}
else
{
    alert("Invalid Password")
}