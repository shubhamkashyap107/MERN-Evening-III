// class Vehicle{
//     constructor(m, c, f, b)
//     {
//         this.mode = m
//         this.color = c
//         this.fuel = f
//         this.brand = b
//     }
// }


// class Car extends Vehicle {
//     constructor(t, d, bt , m, c, f, b)
//     {
//         super(m, c, f, b)
//         this.tyres = t
//         this.doors = d
//         this.bluetooth = bt
//     }
// }
// let car1 = new Car(4,4,true, "Land", "White", "CNG", "Hyundai")
// console.log(car1)


// class Aeroplane extends Vehicle{
//     constructor(isCom, isLar, hah, m, c, f, b)
//     {
//         super(m,c,f,b)
//         this.isCommercial = isCom
//         this.isLarge = isLar
//         this.haveAirHostess = hah
//     }
// }
// let ap1 = new Aeroplane(true, true, true, "Air", "White", "Jet Fuel", "Boeing")
// console.log(ap1)


// class Boat extends Vehicle{
//     constructor(isCar, eng, sp, m, c, f, b)
//     {
//         super( m, c, f, b)
//         this.isCargo = isCar
//         this.engine = eng
//         this.haveSwimmingPool = sp
//     }
// }
// let b1 = new Boat(true, true, true, "Water", "Gray", "Diesel", "Lamborghini")
// console.log(b1)






// class Kuchbhi{

//     #store = 97
//     static store2 = 100

//     constructor(){

//     }

//     tellStoreValue(){
//         console.log(this.#store)
//     }

//     tellStoreValue2()
//     {
//         console.log(Kuchbhi.store2)
//     }
// }


// let kb = new Kuchbhi()
// console.log(kb)
// kb.tellStoreValue2()
// // kb.tellStoreValue()
// // console.log(kb.store)








class User{
    #password 
    
    constructor(un, pass)
    {
        this.username = un
        this.#password = pass
    }

    changePassword(newPassword)
    {
        if(newPassword == "" || newPassword.length < 8)
        {
            alert("Password cannot be empty / lesser than 8 characters")
            return
        }
        this.#password = newPassword
    }
}


let user1 = new User("shubhamxkashyap", "qwertyuiop")
console.log(user1)
user1.changePassword("asdfgh123")
// user1.#password = 123456789
console.log(user1)




class Parent{
    constructor(n, p)
    {
        this.name = n
        this.property = p
    }
    greet()
    {
        console.log("Namaste")
    }
}

class Child extends Parent{
    constructor(n, p, c){
        super(n, p)
        this.cycle = c
    }
    greet()
    {
        console.log("Hello")
    }
}

let child1 = new Child("Suresh", 0, "Unicycle")
console.log(child1)
child1.greet()





class Person{
    constructor(n, a)
    {
        this.name = n
        this.age = a
    }

    greet()
    {
        console.log("Hello how are you")
    }

    greet(name)
    {
        console.log(`Hello ${name}, how are you doing??`)
    }
}


let p1 = new Person("Shubham", 21)
p1.greet("Akash")
p1.greet()


















