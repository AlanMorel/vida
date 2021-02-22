const path = require("path");

module.exports = {
    productionSourceMap: false,
    css: { 
        extract: false
    },
    chainWebpack: config => {
        config.resolve.alias.set("@", path.resolve(__dirname, "src"));
    }
};
