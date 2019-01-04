const CompressionPlugin = require('compression-webpack-plugin')

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  switch (stage) {
    case `build-html`:
    case `build-javascript`:
    case `build-css`:
      actions.setWebpackConfig({
        plugins: [new CompressionPlugin()]
      })
  }
}
