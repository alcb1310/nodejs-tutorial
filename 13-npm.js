// npm - global command, comes with node
// npm --version

// local dependency - usi ti only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// manual aproach (create package.json in the root, create propeties etc)
// npm init (step by ste, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)

console.log(newItems);

console.log('Hello world');
console.log('Hello people');