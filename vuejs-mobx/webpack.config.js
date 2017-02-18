var webpack = require('webpack');
var path = require('path');
let fs = require('fs');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var socketIOClient = require('socket.io-client');
let c = fs.readFileSync('./build-config.yml').toString();
let config = yamlify.safeLoad(c);
let socket;


function parseConfigVars(o){
  let availableVars = {
    $dir:__dirname,
    $cwd:process.cwd(),
    $scripts:path.resolve(__dirname ,'scripts')
  }

  let newObj = JSON.stringify(o);
  for(let _var in availableVars){
    let reg = new RegExp(_var ,'g');
    newObj = newObj.replace(reg , availableVars[_var]);
  }
  return JSON.parse(newObj)
}
config = parseConfigVars(config);

if(config.processes.webpack.socket){
  socket = socketIOClient.connect(`http://localhost:${config.system.port}`);
  socket.on('kill' ,function(){
    process.exit();
  });
}

let options  = {
    entry: {
      bundle:config.processes.webpack.entry
    },
    target:'web',
    output: {
      path:config.processes.webpack.out,
      filename: config.processes.webpack.filename
    },
    cache:true ,
    watch:true,
    module: {
        loaders:loaders

    },
resolve: {
        extensions: ['.js' , '.json'],
        modulesDirectories: ['node_modules']
    },
plugins: []


}

if(vendors.length){
  options.entry.vendors = vendors;
  options.plugins.push(new CommonsChunkPlugin('vendors','vendors.js'));
}
module.exports = options;