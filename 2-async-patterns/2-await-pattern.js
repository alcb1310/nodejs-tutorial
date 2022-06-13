const { readFile, writeFile } = require('fs').promises
// const util = require('util')

// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)


const start = async() => {
    try {
        // const first = await readFilePromise('./folder/first.txt', 'utf-8')
        // const second = await readFilePromise('./folder/second.txt', 'utf-8')
        // await writeFilePromise('./folder/result-mind-grenade.txt', `
        //     THIS IS AWESOME: ${first} ${second}
        // `)
        const first = await readFile('./folder/first.txt', 'utf-8')
        const second = await readFile('./folder/second.txt', 'utf-8')
        await writeFile('./folder/result-mind-grenade.txt', `
            THIS IS AWESOME: ${first} ${second}
        `, {
            flag: 'a'
        })
        console.log(first)
        console.log(second)
    } catch(err){
        console.error(err)
    }
}

start()
// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf-8', (err, data)=> {
//             if(err){
//                 reject(err)
//             }
        
//             resolve(data)
//         })
//     })
// }

// getText('./folder/first.txt')
//     .then(result => console.log(result))
//     .catch(error => console.error(error))