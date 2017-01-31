var fs = require('fs')
var path = require('path')
var name = process.argv[2]
var ext = process.argv[3]

fs.readdir(name, function(err, list) {
  if(err) throw err
  for(i = 0; i < list.length; i++) {
    if(path.extname(list[i]) === '.' + ext) {
      console.log(list[i]);
    } 
  }
})
