let webpack = require("webpack"),//build tool, minification and bundling tool
path = require("path"),
DIST_DIR = path.resolve(__dirname,"dist"), // distribution directory
SRC_DIR = path.resolve(__dirname,"src"), // source directory
UglifyJSPlugin = require('uglifyjs-webpack-plugin'),

webpackConfig = {
    //entry
    entry: SRC_DIR+"/index.js",
    //out put
    output:{
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath:"/app/"
    },

    //modules
    module:{
        
        
        rules:[
            {
                test:/\.js?/,
                include:SRC_DIR,
                loader: "babel-loader", 
                enforce: 'pre',
                query: {
                    presets: ["@babel/preset-env", "@babel/react"],
                    plugins: [
                        "@babel/plugin-proposal-class-properties"
                      ]
                }
            },

           
            {
                test:/\.(css)$/,
                include:SRC_DIR,
                use:['style-loader','css-loader']
            },
            

            
        ],

        
    },


    optimization: {
        minimizer: [
          new UglifyJSPlugin({
            test: /\.js(\?.*)?$/i,
            //include: /\/includes/,
            //exclude: /\/excludes/,
            cache: true,
            sourceMap: true
          }),
        ],
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    devServer: { //this is to configure our webpack-dev-server to serve http requests
        contentBase:[
            path.join(DIST_DIR),
            path.join(SRC_DIR),
            // and so on...
          ] ,//__dirname+"/dist",
        //hot: true,
        inline: true,
        host: "localhost", 
        //host: "local.synergiticit.com",
        port:9092,        
        // https: true,
    
        //for supporting history api fallback
        historyApiFallback: { //localhost:9092/home
          index: '/'
        },
        //compress: true,
        // 'Live-reloading' happens when you make changes to code
        // dependency pointed to by 'entry' parameter explained earlier.
        // To make live-reloading happen even when changes are made
        // to the static html pages in 'contentBase', add 
        // 'watchContentBase'
        watchContentBase: true
    },
    //devtool: 'source-map', //this will give us a copy of human readable format of files basically all files that we used
    //mode: 'production'

}

module.exports = webpackConfig;