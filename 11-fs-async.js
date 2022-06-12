const { readFile, writeFile } = require('fs')

readFile('./folder/first.txt', 'utf-8', (err, first) => {
    if(err){
        console.log(err)
        return
    }
    readFile('./folder/second.txt', 'utf-8', (err, second) => {
        if(err){
            console.log(err)
            return
        }
        
        console.log(first)
        console.log(second)

        writeFile(
            './folder/result-async.txt', 
            `Here is the result : ${first}, ${second}`, 
            (err, result) => {
                if(err){
                    console.log(err)
                }

                console.log(result)
        })
    })
})