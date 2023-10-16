/* eslint-disable no-undef */
/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  // resolver: {
  //   blacklistRE: blacklist([/nodejs-assets\/.*/, /\/android\/.*/, /\/ios\/.*/]),
  // },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};
