var app  = require('../lib/app')
var port = process.env.PORT || 8080

app.listen(port, function() {
  console.log('Demo application listening on port %d', port)
})
