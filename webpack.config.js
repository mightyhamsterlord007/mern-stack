
module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        path: __dirname + '/public/dist',
        filename: 'bundle/[name].js',
        sourceMapFilename: 'bundle/[name].map'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options : {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            }
        ]
    }
}