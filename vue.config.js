const path = require('path');
const debug = process.env.NODE_ENV !== 'production';
const CompressionPlugin = require("compression-webpack-plugin");


module.exports = {
  publicPath: "./",
  devServer: {
    port: 8080,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8888", //接口地址
        ws: false,
        changeOrigin: true, //是否跨域
      }
    },
    disableHostCheck: true,
  },
  outputDir: 'dist', // 构建输出目录
  assetsDir: 'assets', // 静态资源目录 (js, css, img, fonts)
  lintOnSave: false, // 是否开启eslint保存检测，有效值：ture | false | 'error'
  runtimeCompiler: undefined, // 运行时版本是否需要编译 ture | false | 'error'
  transpileDependencies: [], // 默认babel-loader忽略mode_modules，这里可增加例外的依赖包名
  // productionSourceMap: true, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
  productionSourceMap: false,
  parallel: require('os').cpus().length > 1,
  configureWebpack: config => { // webpack配置，值位对象时会合并配置，为方法时会改写配置
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [new CompressionPlugin({
          test: /\.js$|\.html$|\.css/,
          threshold: 100,
          deleteOriginalAssets: false //是否删除源文件
        })]
      }
    } else { // 生产环境配置

    }

  },
  chainWebpack(config) {
    config
      .entry('app')
      .clear()
      .add('./src/main.js')
      .end();
    config.resolve.alias
      .set('~', path.join(__dirname, './src'))
      .set('@', path.join(__dirname, './src/core'))
      .set('#', path.join(__dirname, './src/modules'))
  },
  css: {
		loaderOptions: {
      sass: {
        // sassOptions: {
        //   includePaths: [
        //     path.resolve(__dirname, 'src/core/')
        //   ],
        //   indentedSyntax: true,
        // },
        prependData: `@import "~/assets/scss/common.scss";`, //公共scss
      },
    },
	},


};
