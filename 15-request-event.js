const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
    req.url === '/' && res.end('Welcome')
})
server.on('request', (req, res) => {
    req.url === '/about' && res.end('About')
})

server.listen(5000, () => {
    console.log('Server is listening in port 5000');
    console.log('http://localhost:5000');
})