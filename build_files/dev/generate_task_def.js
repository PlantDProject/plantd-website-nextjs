const fs = require('fs')
const path = require('path')

const [,, image, tag] = process.argv;

const filePath = path.join(__dirname, 'dev-task-def.json');
let fileInformation = JSON.parse(fs.readFileSync(filePath).toString())

fileInformation["containerDefinitions"][0]["image"] = `${image}:${tag}`

console.log(fileInformation)

fs.writeFileSync(filePath, JSON.stringify(fileInformation))