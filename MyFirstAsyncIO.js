var fs = require('fs')
var file = process.argv[1]

fs.readFile(file, function (e, cont) {
  if (e) {
    return console.log(e)
  }
  // fs.readFile(file, 'utf8', callback) can also be used
  var lines = cont.toString().split('\n').length - 1
  console.log(lines)
})
