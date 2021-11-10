// module.exports = {
//     distDir: 'build',
//     webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
//         config.node = {
//             fs: 'empty', // This is required
//         }
//         return config
//     }
// }


module.exports = {
    distDir: 'build',

    webpack: (config, { isServer }) => {
      if (!isServer) config.resolve.fallback.fs = false;
      return config;
    }
  };