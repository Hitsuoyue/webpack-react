module.exports = {
  entry:  __dirname + "/src/index.js",//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/build",//打包后的文件存放的地方
    filename: "main.js"//打包后输出文件的文件名
  },
  devServer: {
    contentBase:"./build",
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
          }
        },
        exclude: /node_modules/
      }
    ]
  }
}