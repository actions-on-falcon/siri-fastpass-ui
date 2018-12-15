exports.onCreateWebpackConfig = ({actions, stage}) => {
  // If production JavaScript and CSS build
  if (stage === 'build-javascript') {
    // Turn off source maps
    actions.setWebpackConfig({
      devtool: false
    })
  }

  // Prevent instascan from crashing
  actions.setWebpackConfig({
    node: {
      fs: 'empty'
    }
  })
}
