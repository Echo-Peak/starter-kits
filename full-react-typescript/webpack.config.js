var webpack = require('webpack');
var path = require('path');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

let config = require('./app/config');
var nodeExternals = require('webpack-node-externals');





module.exports = function(env = {}) {

let vendors = [
    'react',
    'react-dom',
    'react-router',
];
if(env && Array.isArray(env.vendors)){
    vendors = vendors.concat(env.vendors);
}


let aliasModules = config.webpack.vendors.reduce((start , item)=>{

    start[item] = path.resolve(__dirname, `node_modules/${item}`);
    return start
  },{});
  
  let production = env.env === 'production' || process.env.NODE_ENV === 'production' ? true : false;
    return {
        entry: {
            'bundle': './app/components/core/entry.tsx',
            vendor: vendors
        },
        output: {
            path: __dirname + '/app/server/static',
            filename: '[name].js',
            publicPath:`http://${process.env.IP}:${process.env.PORT}/`
        },
      //  cache: true,
        watch: !production,
        target: 'web',
        devtool: production ? false : 'source-map',
        module: {
            rules: [{
                    test: /\.tsx?$/,
                    include: [
                        __dirname + '/app/components'
                        ],
                    exclude: path.resolve(__dirname , 'node_modules'),
                    loader: `awesome-typescript-loader?configFileName=tsconfig.webpack.json`,
                },
                {
                    enforce: "pre", 
                    test: /\.js$/,
                    loader: "source-map-loader"
                },

                {
                    test: /\.json$/,
                    exclude:path.resolve(__dirname , 'node_modules'),
                    loader: `json-loader`
                },
                
                {
                    test: /\.scss$/,
                   loader:'style-loader!css-loader'
                 }
            ]

        },


        resolve: {

            extensions: ['.js', '.json', '.tsx' , '.ts'],
            alias: aliasModules
        },
        externals:{
          'react'  :'React',
          'react-dom':'ReactDOM',
          //'react-router':"ReactRouter"
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                filename: 'vendors.js'
            }),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
            }),
            function() {
                this.plugin("done", function(stats) {
                    if (stats.compilation.errors && stats.compilation.errors.length) {
                        console.log("\007" + stats.compilation.errors);
                    }
      
                });
            }
        ]
    }
}
