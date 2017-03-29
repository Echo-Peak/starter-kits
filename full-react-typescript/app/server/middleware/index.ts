let path = require('path');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let CONFIG = require('../../config');
const SSR = (process.env.SSR === 'true' || !!~process.argv.indexOf('--ssr') || CONFIG.SSR)

const requiredMiddleware : any = [
  bodyParser.raw({limit:CONFIG.maxFileSize || '50mb'}),
  bodyParser.json(),
];


const middleware : any = [
  {
    title:'isomorphic-middleware' ,
     enabled:SSR ,
     name:'iso' ,
     deps(){
       require('babel-register')(CONFIG.webpack.loaders.babel);

     }
   }

]
export {requiredMiddleware, middleware}

