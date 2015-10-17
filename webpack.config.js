module.exports = {
  entry: __dirname + '/app/main.js',

  output: {
    path: __dirname + '/public/js',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
};
