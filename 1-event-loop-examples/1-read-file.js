const { readFile } = require('fs')

console.log('started first task')

// CHECK FILE PATH!!!
readFile('./folder/first.txt', 'utf-8', (err, result) => {
    if(err){
        console.error(err)
        return
    }

    console.log(result)
    console.log('completed first task')
})

console.log('starting next tast');