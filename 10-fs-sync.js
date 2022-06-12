const { readFileSync, writeFileSync } = require("fs")

const first = readFileSync('./folder/first.txt', 'utf-8')
const second = readFileSync('./folder/second.txt', 'utf-8')

console.log(first, second)

// Create and overwrite a file
writeFileSync('./folder/result-sync.txt', `Here is the result : ${first}, ${second}`)

// Create and append a file
writeFileSync('./folder/result-sync.txt', `Here is the result : ${first}, ${second}`, {
    flag: 'a'
})