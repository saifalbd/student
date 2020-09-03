module.exports = {
    // http://127.0.0.1:8000
    devServer: {
      proxy: process.env.NODE_ENV === 'production'
      ? '/api/'
      : 'http://127.0.0.1:8000/api/'
    },
      publicPath: '',
      assetsDir:'',
      outputDir:'../public_html',
      filenameHashing: true,
     // indexPath: '../public_html/views/vue.blade.php',
    indexPath: '../server/resources/views/vue.blade.php',
  
      
    }
  