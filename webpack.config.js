const path = require('path');

module.exports = {
    mode: "development",
    entry: [
        "./src/index.js"
        ],
    output: {
        path: path.resolve(__dirname, "dist/js"),
        filename: "bundle.js"
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.min.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ["@babel/preset-env"]
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ["@babel/preset-env"]
                }
            },
           { test: /\.css$/, loaders: [ 'style-loader', 'css-loader' ]}, //Need this for CSS and for applying the styles
           { test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/, loader: 'url-loader?limit=100000' } //Need this for the type of files specified there
                                                                                                //(file-loader && url-loader to resolve imports to assets)
        ]
    },
    resolve: {
        extensions: ['.js', '.es6']
    }
    
}