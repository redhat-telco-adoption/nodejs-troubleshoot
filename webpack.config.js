const path = require('path');
const nodeExternals = require('webpack-node-externals')

const {
    NODE_ENV = 'production'
} = process.env;

module.exports = {
    entry: './src/app.ts',
    devtool: 'inline-source-map',
    target: 'node',
    mode: NODE_ENV,
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist'),
    },
    externals: [
        nodeExternals()
    ],
    watch: NODE_ENV == 'development'
};