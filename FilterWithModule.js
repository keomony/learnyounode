var name = process.argv[2]
var ext = process.argv[3]
var myModule = require('./MyModule.js')
myModule(name, ext, function(err,list){
  if(err){
    return console.error("There is an error: ", err)
  }
  list.forEach(function(l){
    console.log(l)
  })
})
