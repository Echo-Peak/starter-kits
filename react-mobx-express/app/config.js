let path= require("path");
let p = (relpath) => path.resolve(__dirname , relpath);

module.exports = {
    server:{
      static:p('./server/static'),
      views:p('./server/views'),
      port:6400,
      SSR:false,
      maxFileSize:'5mb',
      cache:p('./server/cache')
    },
    proxy:{
      port:process.env.PORT,
      target:'localhost'
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