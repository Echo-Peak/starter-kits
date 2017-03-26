var nodemon = require('nodemon');
let config = require('../app/config');
var path = require("path");

const SSR = (process.env.SSR === 'true' || process.argv.includes('--ssr') || config.SSR);
let p = (relpath) => path.resolve(__dirname , relpath);

nodemon({
  script: p('../app/server/app.js'),
  args:[SSR ? '--ssr' : ''],
  ext: 'js',
  watch:[
    p('../app/server/core'),
    p('../app/server/middleware')
  ]
});

nodemon.on('start', function () {
  console.log('App has started');
}).on('quit', function () {
  console.log('App has quit');
}).on('restart', function (files) {
  console.log('App restarted');
});
