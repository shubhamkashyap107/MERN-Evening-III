const http = require("http")

// let arr = ["Shubham", "SHaktiman", "Shinchan", "Doraemon"]
let obj = {
    name : "Shubham",
    age : 25,
    city : "Delhi"
}


const server = http.createServer((req, res) => {
    if(req.url == "/data" && req.method == "GET")
    {
        res.end("GET REQUEST")
    }
    else if(req.url == "/data" && req.method == "POST")
    {
        res.end("POST REQUEST")
    }
})

// const server = http.createServer((req, res) => {
//     if(req.url == "/"){
//         res.writeHead(201, {"content-type" : "text/html"})
//         res.end(`
//             <!DOCTYPE html>
//             <html>
//             <head>
//             <title>My HTML Page</title>
//             </head>
//             <body>
//             <h1>Hello from the HTTP server!</h1>
//             <p>This is some HTML content.</p>
//             </body>
//             </html>
//         `)
//     }
//     else if(req.url == "/home")
//     {
//         res.writeHead(201)
//         res.end("Hello world")
//     }
//     else if(req.url == "/user")
//     {
//         res.writeHead(200, {"content-type" : "text/json"})
//         res.end(JSON.stringify(obj))
//     }
//     else if(req.url == "/profile")
//     {
//         res.end("Hello ji welcome to profile")
//     }
//     else
//     {
//         res.end("Invalid API URL / Endpoint")
//     }
// })

server.listen(8080, () => {
    console.log("Server Running")
})


