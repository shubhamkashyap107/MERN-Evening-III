const fs = require("fs")

fs.writeFile("test.txt", "Hello ji", (err) => {
    console.log("Done")
})

fs.writeFileSync("test.txt", "Hello world")


fs.readFile("test.txt", "utf-8" , (err, data) => {
    console.log(data)
})

const data = fs.readFileSync("test.txt", "utf-8")
console.log(data)


fs.appendFile("test.txt", "\nLearn NODEJS", (err) => {
    console.log("DONE")
})

fs.appendFileSync("test.txt", "\nOK")



fs.unlink("test.txt", () => {
    console.log("DELETED")
})

fs.unlinkSync("test.txt")



console.log("OK")


console.log(process.argv)
const a = Number(process.argv[2])
const b = Number(process.argv[3])


function sum(a, b)
{
    console.log(a + b)
}


sum(a, b)