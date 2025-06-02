
// let arr = [1,2,3,4,"ANS"]
// console.log(arr[4])



// let arr = [[1,2,3], ["abc", true], [1, "two", false, "ANS"]]  
// nested -> unnest [1,2,3,"abc",true, 1, "two", false, "ans"]
// console.log(arr.length)
// let innerArr = arr[2]
// console.log(innerArr[3])
// console.log(arr[2][3])

// let nArr = arr.flat()
// console.log(nArr)



// let arr = [1,2,["one", "two", [true, false, ["qwerty","ans"]]]]
// console.log(arr.length)
// console.log(arr[2][2][2][1])
// console.log(arr)
// let nArr = arr.flat()
// console.log(nArr)
// let nArr2 = nArr.flat()
// console.log(nArr2)
// let nArr3 = nArr2.flat()
// console.log(nArr3)










// let n = prompt("Please enter the size of the array")
// let arr = []

// for(let i = 1; i <= n; i++)
// {
//     let val = prompt("Enter value number " + i)
//     arr.push(val)
// }


// console.log(arr)


// let arr = []
// let size = prompt("Enter total number of inner arrays")

// for(let i = 0; i < size; i++)
// {
//     let innerSize = prompt("Enter size of array " + i)
//     let temp = []

//     for(let j = 0; j < innerSize; j++)
//     {
//         let val = prompt("Enter element " + j)
//         temp.push(val)
//     }

//     arr.push(temp)
// }


// for(let i = 0; i < arr.length; i++)
// {
//     let innerArr = arr[i]
//     let str = ""
//     for(let j = 0; j < innerArr.length; j++)
//     {
//         // console.log(innerArr[j])
//         str += innerArr[j] + " "
//     }
//     console.log(str)
// }



// for(let i = 0; i < arr.length; i++)
// {
//     let str = ""
//     for(let j = 0; j < arr[i].length; j++)
//     {
//         // console.log(innerArr[j])
//         str += arr[i][j] + " "
//     }
//     console.log(str)
// }






let arr = [[0,1,2,3],[11,99,37,48],[1000,101,152,39],[8,10,157,138]]
let x = 137
let isXPresent = false

for(let i = 0; i < arr.length; i++)
{
    for(let j = 0; j < arr[i].length; j++)
    {
        if(arr[i][j] == x)
        {
            isXPresent = true
            console.log(i, j)
        }
    }
}

if(isXPresent == false)
{
    console.log(-1)
}
