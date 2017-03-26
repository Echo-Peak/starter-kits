var webpack = require('webpack');
var path = require('path');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

let config = require('./app/config');
var nodeExternals = require('webpack-node-externals');





module.exports = function(env = {}) {

let aliasModules = config.webpack.vendors.reduce((start , item)=>{

    start[item] = path.resolve(__dirname, `node_modules/${item}`);
    return start
  },{});
  
  let production = env.env === 'production' || process.env.NODE_ENV === 'production' ? true : false;
    return {
        entry: {
            'bundle': config.webpack.entry,
            vendor: config.webpack.vendors
        },
        output: {
            path: config.webpack.out,
            filename: '[name].js',
            publicPath:`http://${process.env.IP}:${process.env.PORT}/`
        },
      //  cache: true,
        watch: !production,
        target: 'web',
        devtool: production ? false : 'source-map',
        //devtool: process.env.NODE_ENV === 'production' ? true : false,
        module: {
            rules: [{
                    test: /\.jsx|\.js$/,
                    include: config.webpack.include,
                    exclude: path.resolve(__dirname , 'node_modules'),
                    loader: `babel-loader`,
                    options: config.webpack.loaders.babel
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
        node: {
          fs: "empty"
        },
        // externals:[nodeExternals()],
        resolve: {

            extensions: ['.js', '.json', '.jsx'],
            alias: aliasModules
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
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
