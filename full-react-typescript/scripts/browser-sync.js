let bs = require('browser-sync').create();
let config = require('../app/config');
const path = require('path');
let root = process.cwd();
let p = (relpath) => path.resolve(root , relpath);


function mid(req , res , done){
    if(!res.status){
        res.status = function(statusCode){
            res.statusCode = statusCode;
            return res
        }
    }
    if(!res.send){
        res.send = function(data){
            res.end(data);
            return res
        }
    }

    done()
}


bs.init({
port:config.proxy,
middleware:[mid],
  proxy:`http://${config.host}:${config.port}`
});


bs.watch(p("app/server/views/**/*.pug")).on("change",()=> bs.reload(...arguments ,{stream:true}));
bs.watch(p("app/server/static/*.*")).on("change",()=> bs.reload(...arguments ,{stream:true}));
bs.watch(p("app/server/static/**/**")).on("change",()=> bs.reload(...arguments ,{stream:true}));