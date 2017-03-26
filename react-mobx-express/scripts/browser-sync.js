let bs = require('browser-sync').create();
let config = require('../app/config');
const path = require('path');

let p = (relpath) => path.resolve(__dirname , relpath);

bs.init({
port:config.proxy.port,
  proxy:`http://${config.proxy.target}:${config.server.port}`
});


bs.watch(p("./built/server/views/**/*.pug")).on("change",()=> bs.reload(...arguments ,{stream:true}));
bs.watch(p("/built/server/static/*.*")).on("change",()=> bs.reload(...arguments ,{stream:true}));