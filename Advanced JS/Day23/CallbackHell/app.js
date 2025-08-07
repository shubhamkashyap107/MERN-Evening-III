// function clickPhoto(cb)
// {
//     setTimeout(() => {
//         console.log("Photo Clicked")
//         cb()
//     }, 4000)
// }


// function selectPhoto(cb)
// {
//     setTimeout(() => {
//         console.log("Photo Selected")
//         cb()
//     }, 2000)
// }


// function applyFilters(cb)
// {
//     setTimeout(() => {
//         console.log("Filter Applied")
//         cb()
//     }, 3000)
// }

// function writeCaption(cb)
// {
//     setTimeout(() => {
//         console.log("Caption Selected")
//         cb()
//     }, 2000)
// }

// function uploadPhoto()
// {
//     setTimeout(() => {
//         console.log("Photo Uploaded")
//     }, 1000)
// }


// clickPhoto(() => {
//     selectPhoto(() => {
//         applyFilters(() => {
//             writeCaption(() => {
//                 uploadPhoto()
//             })
//         })
//     })
// })


// clickPhoto()
// selectPhoto()
// applyFilters()
// writeCaption()
// uploadPhoto()




function clickPhoto()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Photo Clicked")
            resolve()
        }, 4000)
    })
}


function selectPhoto()
{
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Photo Selected")
            resolve()
        }, 2000)
    })
}


function applyFilters()
{
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Filter Applied")
            resolve()
        }, 3000)
    })

}

function writeCaption()
{
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Caption Selected")
            resolve()
        }, 2000)
    })
   
}

function uploadPhoto()
{
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Photo Uploaded")
            // resolve("Photo Uploaded")
            resolve()
        }, 1000)
    })

}


clickPhoto()
.then(selectPhoto)
.then(applyFilters)
.then(writeCaption)
.then(uploadPhoto)

