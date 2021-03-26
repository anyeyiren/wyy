const path = require('path');


//修改路径别名

const resolve = dir => path.resolve(__dirname,dir)
module.exports = {
    webpack:{
        alias:{
            "@" : resolve("src")
        }
    }
}