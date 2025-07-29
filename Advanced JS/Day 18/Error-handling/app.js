// js is an interpreted language.


// console.log(1)


// try {
//     const a = 10
//     a = 99  
// }
// catch (error) {
//     console.log(error.__proto__)
//     // console.log(error.message)
// }



// console.log("Important piece of code")









// console.log("OK")



// const myError = new Error("Tum pagal ho , coding chod do")
// throw myError

// try {
//     throw new Error("Kuch bhi")
// } catch (error) {
//     console.log(error)
// }
// throw new Error("Kuch bhi")





// console.log("Important")









class PadhaiLikhaiError extends Error{
    constructor(msg){
        super(msg)
        this.name = "PL_Error"
    }
}



throw new PadhaiLikhaiError("Syntax Error")
















