const fs = require("fs")

const command = process.argv[2] // create, read, update, delete
const fileName = process.argv[3]
const data = process.argv[4]


function work()
{

    if(!fileName)
    {
        console.log("Please Enter a file name")
        return
    }

    switch(command)
    {
        case "create":
            if(!data)
            {
                console.log("Please provide valid data")
                return
            }
            fs.writeFileSync(fileName, data)
            break

        case "read":
            const val = fs.readFileSync(fileName, "utf-8")
            console.log(val)
            break

        case "update":
            if(!data)
            {
                console.log("Please provide valid data")
                return
            }
            fs.appendFileSync(fileName, "\n" + data)
            break


        case "delete":
            fs.unlinkSync(fileName)
            break


        default:
            console.log("Invalid Command")
    }
}


work()