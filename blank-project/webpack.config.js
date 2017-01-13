var webpack = require('webpack');
var path = require('path');
let fs = require('fs');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var socketIOClient = require('socket.io-client');
let c = fs.readFileSync('./build-config.yml').toString();
let config = yamlify.safeLoad(c);
let socket;
let vendors;
let plugins = [];
let loaders = [];
// socketio config
if(config.processes.webpack.socket){
  socket = socketIOClient.connect(`http://localhost:${config.system.port}`);
  socket.on('kill' ,function(){
    process.exit();
  });
}

// plugins
if(config.processes.webpack){
  let supportedPlugins = ['DedupePlugin' ,'LimitChunkCountPlugin' ,'OccurrenceOrderPlugin' , 'UglifyJsPlugin'];
  plugins = _p = config.processes.webpack.plugins || [];
  plugins = supportedPlugins.map(p => {
    if(~plugins.indexOf(p)){
      return new webpack.optimize[p]()
    }
  });
  if(_p.includes('CommonsChunkPlugin')){
    vendors = config.processes.webpack.vendors || [];

  }
  
  plugins.push(compileDone);
}


if(config.processes.webpack.fileTypes){
  let types = config.processes.webpack.fileTypes || [];
  let correspondingLoader = {
    babel:{
      presets:config.processes.webpack.babel.presets,
      plugins:config.processes.webpack.babel.plugins,
      types:['js','jsx']
    },
    css:['css'],
    ts:['ts' ,'tsx'],
    raw:['*']
  }

  for(let loader in correspondingLoader){

  }

}

function compileDone(){
  this.plugin("done", (stats)=>{
    let errors = stats.compilation.errors;
    if (errors && errors.length){

      if(config.system.beep){
        console.log("\007" + errors);
      }

      return
    }
    if(config.processes.webpack.socket){
      socket.emit('reload');
    }
}





let options  = {
    entry: {
      bundle:meta[use].path
    },
    output: {
          path:meta[use].out,
        filename: '[name].js'
    },
    cache: true,
    watch:true,
    module: {
        loaders: [
           {
              test: /\.jsx|\.js$/,
              include:config.processes.webpack.directorys || __dirname,
              loader:`babel`,
              query:querys.babel
          },

          {
             test: /\.json$/,
             loader: `json`
         }
      ]

    },
resolve: {
        extensions: ['.js','.jsx','' ,'.json'],
        modulesDirectories: ['node_modules']
    },
plugins: []


}

if(vendors.length){
  options.entry.vendors = vendors;
  options.plugins.push(new CommonsChunkPlugin('vendors','vendors.js'));
}
module.exports = options;