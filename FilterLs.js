var fs = require('fs')
var path = require('path')
var name = process.argv[2]
var ext = "." + process.argv[3]

fs.readdir(name, function(err, list) {
  if(err) throw err
  list.forEach(function(l){
    if(path.extname(l) === ext) {
      console.log(l);
    }
  })
})
