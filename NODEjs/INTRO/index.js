const figlet = require("figlet")
const chalk = require("chalk")


console.log(chalk.blue("HEllo ji"))

figlet("SHUBHAM", (err, data) => {
    console.log(chalk.red(data))
})