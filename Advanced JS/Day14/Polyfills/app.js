if(!Array.prototype.BinarySearch)
{
    Array.prototype.BinarySearch = function(tar){
        let arr = this
        let si = 0
        let ei = arr.length - 1

        while(si <= ei)
        {
            let mid = Math.floor((si + ei) / 2)

            if(arr[mid] == tar)
            {
                return mid
            }
            else if(arr[mid] > tar)
            {
                ei = mid - 1
            }
            else
            {
                si = mid + 1
            }
        }
        return -1
    }
}
let a = [11,33,55,66,77,88]
console.log(a.BinarySearch(66))



// if(!String.prototype.contains)
// {
//     String.prototype.contains = function(x)
//     {
//         let str = this

//         for(let i = 0; i < str.length; i++)
//         {
//             if(str[i] == x)
//             {
//                 return true
//             }
//         }

//         return false
//     }
// }

// console.log("qwerty".contains("q"))

// let str = "qwerty"
// console.log(str.includes("qw"))













if(String.prototype.toLowerCase)
{
    String.prototype.toLowerCase = function(){
        let str = this
        return str.toUpperCase()
    }
}



let str = "My name Is Shubham"
console.log(str.toLowerCase())









