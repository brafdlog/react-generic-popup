module.exports = {
  entry: './src/index.js',
  output: {
    // Name of the variable on the window object (in case we target browser only)
    library: 'reactGenericPopup',
    libraryTarget: 'umd',
    // Output file name
    filename: 'lib/reactGenericPopup.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          compact: false
        }
      }
    ]
  },
  devtool: "source-map"
}