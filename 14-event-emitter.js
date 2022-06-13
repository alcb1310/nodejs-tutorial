const EventEmitter =  require('events')

const customEmitter = new EventEmitter()

// order matters between on and emit
customEmitter.on('response', (name, age) => {
    console.log(`data recieved ${name} with age ${age}`)
})

customEmitter.on('response', () => {
    console.log(`some other logic here`)
})

customEmitter.emit('response', 'andres', 47)