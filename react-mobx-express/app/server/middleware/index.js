let path = require('path');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let CONFIG = require('../../config');
const SSR = (process.env.SSR === 'true' || process.argv.includes('--ssr') || CONFIG.server.SSR)

module.exports.requiredMiddleware = [
  bodyParser.raw({limit:CONFIG.server.maxFileSize || '50mb'}),
  bodyParser.json(),
];


module.exports.middleware = [
  {
    title:'isomorphic-middleware' ,
     enabled:SSR ,
     name:'iso' ,
     deps(){
       require('babel-register')(CONFIG.webpack.loaders.babel);

     }
   }


]
