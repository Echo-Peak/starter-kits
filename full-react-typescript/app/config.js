let path= require("path");
let p = (relpath) => path.resolve(__dirname , relpath);

module.exports = {
    port:6400,
    proxy:8080,
    host:'localhost',
    SSR:false,
    maxFileSize:'20mb',

    paths:{
      components:p('./components')  ,
      server:p('./server'),
      dist:p('../dist'),
      views:p('./server/views'),
      static:p('./server/static')
    },
    webpack:{
        entry:p('./components/entry.jsx'),
        out:p('./server/static'),
        vendors:['react' ,'react-router' ,'react-dom'],
        include:[
            p('./components'),
            p('./stores'),
        ],
        loaders:{
            babel:{
              presets: [
                            'stage-1', ["es2015", {
                                "loose": true,
                                "modules": false
                            }],
                            'react'
                        ],
                        plugins: ['transform-decorators-legacy', 'transform-class-properties']
            }
        }
    }
}