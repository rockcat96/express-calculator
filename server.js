const express = require("express")
const app = express()

const port = 4000


app.get(`/calc/:num1/:num2`, (req, res) => {
    let num1 = +req.params.num1
    let num2 = +req.params.num2
    let operation = req.query.operation
    
    switch(operation) {

        case "add":
            res.send(`The sum is ${num1 + num2}`)
            break;

        case "sub":
            res.send(`The difference is ${num1 - num2}`)
            break;

        case "mult":
            res.send(`The product is ${num1 * num2}`)
            break;

        case "div":
            res.send(`The result is ${num1 / num2}`)
            break;

        case "sq":
            res.send(`The result is ${num1 ** num2}`)
            break;
        
        case "sqrt":
            res.send(`The result is ${Math.sqrt(num1)}`)
            break;
        default:
            res.send(`You need to input a value into num1 and num2 and specify the operation in the url`)

    }
})

// app.get(`/calc`, (req, res) => {
//     let num1 = +req.query.num1
//     let num2 = +req.query.num2
//     let operation = req.query.operation

//     console.log(num1)
//     console.log(num2)
//     console.log(operation)
//     console.log(req.query)

//     switch(operation) {

//         case "add":
//             res.send(`The sum is ${num1 + num2}`)
//             break;

//         case "sub":
//             res.send(`The difference is ${num1 - num2}`)
//             break;

//         case "mult":
//             res.send(`The product is ${num1 * num2}`)
//             break;

//         case "div":
//             res.send(`The result is ${num1 / num2}`)
//             break;

//         case "sq":
//             res.send(`The result is ${num1 ** num2}`)
//             break;
        
//         case "sqrt":
//             res.send(`The result is ${Math.sqrt(num1)}`)
//             break;
//         default:
//             res.send(`You need to input a value into num1 and num2 and specify the operation in the url`)

//     }
    
// })





app.listen (port, () => {

    console.log(`Express is listening on port: ${port}`)
})