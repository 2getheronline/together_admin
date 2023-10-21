let path = require("path");

function resolve(dir) {
    return path.resolve(__dirname, dir);
}

module.exports = {
    "transpileDependencies": [
        "vuetify"
    ],
    outputDir: resolve("public"),
    filenameHashing: false,
    devServer: {
        disableHostCheck: true,
        proxy: {
            '/api': {
                // target: 'https://together.clap.co.il', //'http://192.168.43.186:8000',
                target: 'http://192.168.33.13:8030', //'http://192.168.43.186:8000',
                logLevel: "debug",
            }
        }
    },
    chainWebpack: config => {
        // config.plugins.delete("html");
        // config.plugins.delete("preload");
        // config.plugins.delete("prefetch");
    },
    pluginOptions: {
        i18n: {
            locale: 'en',
            fallbackLocale: 'en',
            localeDir: 'locales',
            enableInSFC: true
        }
    }
}
