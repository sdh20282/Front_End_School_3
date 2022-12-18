const path = require('path');
const webpack = require('webpack');
const childProcess = require('child_process');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


require('dotenv').config();

module.exports = {
    mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',

    entry: {
        main: path.resolve('./src/app.js')
    },

    output: {
        filename: '[name].js',
        path: path.resolve('./dist')
    },

    module: {
        rules: [
            // {
            //     // 로더가 처리해야할 파일의 패턴(정규표현식)입니다. 
            //     // 여기서 \는 .을 정규표현식 문법이 아닌 특수문자로, .js$ 는 .js 로 끝나는 모든 파일을 의미합니다.
            //     // 원래 정규표현식에서 .의 의미는 모든 문자나 숫자를 의미합니다.
            //     test: /\.js$/,
            //     use: [
            //         // 위와 일치하는 패턴의 파일이 전달될 로더를 설정합니다.
            //         path.resolve('./myLoader.js')
            //     ]
            // },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                // 여기 추가합니다.
                test: /\.(png|jpg|gif|svg)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 20 * 1024 // 1kb가 1024byte 이기 때문에 20kb를 원한다면 1024에 20을 곱합니다.
                    }
                },
            },
        ]
    },
    plugins: [
        new webpack.BannerPlugin({
            banner:
                `
            Commit version : ${childProcess.execSync('git rev-parse --short HEAD')}
            Committer : ${childProcess.execSync('git config user.name')}
            Commit Date : ${new Date().toLocaleString()}
        `
        }),
        new webpack.DefinePlugin({
            dev: JSON.stringify(process.env.DEV_API),
            pro: JSON.stringify(process.env.PRO_API)
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin()
    ]
}