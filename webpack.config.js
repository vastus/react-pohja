module.exports = {
  context: __dirname + '/app',

  entry: {
    html: './index.html',
    javascript: './main.js',
  },

  output: {
    path: __dirname + '/public',
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      },
    ],
  },

  devServer: {
    inline: true,
  },
};
