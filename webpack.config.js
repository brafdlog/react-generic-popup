module.exports = {
  output: {
    // Name of the variable on the window object (in case we target browser only)
    library: 'reactGenericPopup',
    libraryTarget: 'umd',
    // Output file name
    filename: 'reactGenericPopup.js'
  },
  externals: {
    // require("react") is external and available on the global var React
    "react": "React",
    "react-dom": "ReactDOM"
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