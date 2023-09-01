const TerserPlugin = require('terser-webpack-plugin');


// module.exports = function (webpackConfig, { dev, isServer }) {
//     if (!dev && !isServer) {
//         // Only minify the code in production and client builds

//         // Get the optimization object from the webpackConfig
//         const optimization = webpackConfig.optimization || {};

//         optimization.minimizer = [
//             // Use TerserPlugin for minification
//             new TerserPlugin({
//                 terserOptions: {
//                     compress: {
//                         // Customize the compression options as needed
//                         drop_console: true, // Remove console.log statements
//                     },
//                 },
//                 extractComments: false, // Disable extracting comments to a separate file
//             }),
//         ];

//         // Assign the updated optimization object back to webpackConfig
//         webpackConfig.optimization = optimization;
//     }

//     return webpackConfig;
// };


module.exports = (config, { isServer }) => {
    // productionBrowserSourceMaps: true,
    if (isServer) {
        config.optimization.minimize = true;
        config.optimization.minimizer = [new TerserPlugin()];
        config.optimization.minimizer.push(
            // Use TerserWebpackPlugin for minifying JavaScript
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        // Customize compression options if needed
                    },
                },
            })
        );
    }
    return config;
}