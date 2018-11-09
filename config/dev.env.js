var merge = require('webpack-merge')
var prodEnv = require('./prod.env')
require('dotenv').load()

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_URI: JSON.stringify(process.env.BASE_URI)
})
