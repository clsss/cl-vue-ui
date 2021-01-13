const path = require("path");

const CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  publicPath: isProd ? '' : '/show',
  pages: {
    index: {
      entry: "demo/main.js",
      template: "public/index.html",
      filename: "index.html"
    }
  },
  // 引入全局scss文件;
  css: {
    extract: true,
    sourceMap: !isProd,
    loaderOptions: {
      sass: {
        // sass-loader 8.0 以上版本将 data 改为 prependData
        prependData: `@import "./demo/style/consts.scss";`
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule("js")
      .include.add(path.resolve(__dirname, "packages"))
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap(options => options);
    // 生产环境开启 gzip;去除打印
    if (isProd) {
      config.plugin('compressionPlugin')
        .use(
          new CompressionPlugin({
            test: /\.js$|\.html$|.\css/, // 匹配文件名
            threshold: 10240, // 对超过10k的数据压缩
            deleteOriginalAssets: false // 不删除源文件
          })
        )
      config.plugin('terserPlugin')
        .use(
          new TerserPlugin({
            terserOptions: {
              warnings: false,
              compress: {
                drop_debugger: true,
                drop_console: true
              }
            }
          })
        )
    }
  }

};
