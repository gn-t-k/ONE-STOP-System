const path = require('path')

module.exports ={
  resolve: {
    alias: {
      '~': path.resolve(rootPath, './src'),
      '@': path.resolve(rootPath, './src'),
    },
    extentions: ['.ts', '.tsx', '.js', '.jsx'],
  },
}
