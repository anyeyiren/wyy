const path = require('path');


//修改路径别名

const resolve = dir => path.resolve(__dirname, dir)
module.exports = {
    webpack: {
        alias: {
            "@": resolve("src")
        },
        configure: (webpackConfig) => {
            const oneOfParent = webpackConfig.module.rules.find(item => 'oneOf' in item)
            let fileLoader;
            if (oneOfParent.oneOf && oneOfParent.oneOf.length) {
                fileLoader = oneOfParent.oneOf.find(item => {
                    if (!item.loader || !item.loader.includes('url-loader')) return false
                    const testStrs = item.test.map(reg => String(reg))
                    return testStrs.find(str => str.includes('png'))
                })
                if (!fileLoader.options) {
                    fileLoader.options = {}
                }
                fileLoader.options.esModule = false
            }
            // console.log(util.inspect(webpackConfig, {
            //     depth: 10,
            // }))
            return webpackConfig;
        }
        // configure: {
        //
        //     module: {
        //
        //         rules: [
        //             {
        //                 oneOf : [
        //                     {
        //
        //                     }
        //                 ]
        //             }
        //             // {
        //             //     test: /\.(png|jpg|gif|jpeg)$/,
        //             //     use: [{
        //             //         loader: 'file-loader',
        //             //         // loader: 'file-loader',
        //             //         options: {
        //             //
        //             //             esModule: false, // 这里设置为false
        //             //         }
        //             //     }]
        //             // }
        //         ]
        //     }
        //
        // }


    }
}