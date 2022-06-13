const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.write('Home Page')
        res.end()
    } else if (req.url === '/about'){
        // BLOCKING CODE !!!
        for(let i=0; i<1000; i++){
            for(let j=0; j<1000; j++){
                console.log(`${i} ${j}`)
            }
        }
        res.write('About page')
        res.end()
    } else {
        res.write('DontExist')
        res.end()
    }

})

server.listen(5000, () => {
    console.log('Server is listening on port 5000...')
})