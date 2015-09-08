var express     = require('express')
var morgan      = require('morgan')
var serveStatic = require('serve-static')

var app = express()

app.use(morgan('combined'))
app.use(serveStatic(__dirname + '/../public'))

module.exports = app
