const withWorkers = require('@zeit/next-workers')

module.exports = withWorkers()

// Module.exports = {
//   webpack(config, options) {
//     config.module.rules.push({
//       test: /\.worker\.js$/,
//       loader: 'worker-loader',
//       options: {
//         name: 'static/[hash].worker.js',
//         publicPath: '/_next/',
//       },
//     })

//     return config
//   },
// }

// module.exports = withWorkers({
//   webpack(config, options) {
//     return config
//   }
// })
