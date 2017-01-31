var fs = require('fs')
var myNumber = undefined
function addOne(callback) {
  fs.readFile(process.argv[1], function doneReading(err, fileContents) {
    myNumber = parseInt(fileContents)
    myNumber++
    console.log("this is before callback")
    callback()
    console.log("this is after callback")
  })
}

function logMyNumber() {
  console.log(myNumber)
}

addOne(logMyNumber)
