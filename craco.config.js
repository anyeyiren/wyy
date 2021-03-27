const path = require('path');


//修改路径别名

const resolve = dir => path.resolve(__dirname, dir)
module.exports = {
    webpack: {
        alias: {
            "@": resolve("src")
        },
        // configure: {
        //     module: {
        //         rules: [
        //             {
        //                 test: /\.(png|jpg|gif|jpeg)$/,
        //                 use: [{
        //                     loader: 'file-loader',
        //                     // loader: 'file-loader',
        //                     options: {
        //
        //                         esModule: false, // 这里设置为false
        //                     }
        //                 }]
        //             }
        //         ]
        //     }
        //
        // }


    }
}