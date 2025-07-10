class Car{
    constructor(n, t, c)
    {
        this.name = n
        this.tyres = t
        this.color = c
    }
}


let c2 = new Car("BMW", 4, "blue")
console.log(c2)


let c3 = new Car("Supra" , 4, "white")
console.log(c3)


// let c1 = new Car()
// c1.name = "BMW"
// c1["fuel"] = "petrol"
// console.log(c1)

// localStorage.setItem("users", JSON.stringify([]))

let fn = prompt("Enter First Name")
let ln = prompt("Enter Last Name")
let add = prompt("Enter Address")
let bal = prompt("Enter balance")
let acc = Math.floor(Math.random() * 100000000)

class Customer{
    constructor(fn, ln, add, bal, acc)
    {
        this.firstName = fn
        this.lastName = ln
        this.address = add
        this.balance = bal
        this.accNumber = acc
    }
}


let customer1 = new Customer(fn, ln, add, bal, acc)

let currUsers = JSON.parse(localStorage.getItem("users"))
currUsers.push(customer1)
localStorage.setItem("users", JSON.stringify(currUsers))

// localStorage.setItem("User", JSON.stringify(customer1))
