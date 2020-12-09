// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    devServer: {
        proxy: {
            '/api': {
                changeOrigin: true,
                target: 'http://127.0.0.1:3000',
                pathRewrite: {
                    '^/api': '/',
                },
            },
        },
    },
};
