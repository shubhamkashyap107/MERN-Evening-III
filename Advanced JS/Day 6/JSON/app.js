let obj = {
    name : "Shubham",
    age : 30
}

console.log(obj)
console.log(JSON.stringify(obj))

let val = JSON.stringify(obj)
console.log(typeof(val))

let data = JSON.parse(val)
console.log(data.name)
console.log(data.age)








let arr = [1,2,3,4,5,6]

let jsonData = JSON.stringify(arr)

console.log(typeof(jsonData))
console.log(jsonData[0])

let newArr = JSON.parse(jsonData)
console.log(newArr[0])