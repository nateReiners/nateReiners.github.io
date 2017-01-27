module.exports = {
    entry: "./lib/entry.js",
    output: {
        path: __dirname,
        filename: "./lib/bundle.js"
    },
    resolve: {
    extensions: ["", ".js"]
  },
  devtool: 'source-map',
  module: {
    loaders: [
    {
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['es2015']
      }
    }
    ]
  }
};
