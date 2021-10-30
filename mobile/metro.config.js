/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const obfuscator = require('obfuscator-io-metro-plugin')

const jsoMetroPlugin = obfuscator({
  compact: false,
  sourceMap: true,
  controlFlowFlattening: true,
  controlFlowFlatteningThreshold: 1,
  numbersToExpressions: true,
  simplify: true,
  selfDefending: false,
}, {
  runInDev: false,
  logObsfuscatedFiles: true
})

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  ...jsoMetroPlugin,
};
