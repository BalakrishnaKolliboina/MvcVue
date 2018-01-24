var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

// creates an entry with keys/values for each file in root of ./src directory
function buildEntry() {
    const reducer = (entry, file) => { entry[file.split(".").shift()] = `./src/${file}`; return entry; };

    return fs.readdirSync(path.join(__dirname, "src"))
        .filter(file => file.endsWith(".js"))
        .reduce(reducer, {});
}


module.exports = {
    entry: buildEntry(),
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: '[name].js',
        library: '[name]'
    },
    // IMPORTANT NOTE: If you are using Webpack 2, replace "loaders" with "rules"
    module: {
        loaders: [
			{
			    loader: 'babel-loader',
			    test: /\.js$/,
			    exclude: /node_modules/
			},
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
          {
              test: /\.(png|jpg|gif|svg)$/,
              loader: 'file-loader',
              options: {
                  name: '[name].[ext]?[hash]'
              }
          }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    }
}