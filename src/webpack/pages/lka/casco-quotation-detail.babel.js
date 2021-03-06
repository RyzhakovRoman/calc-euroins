import commonConfig from '../../common/common-config.babel'
import path from 'path'
import {pathDist} from '../../common/const'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import TerserJSPlugin from 'terser-webpack-plugin'
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin'
import {CleanWebpackPlugin} from 'clean-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import WebpackShellPlugin from 'webpack-shell-plugin'
import MomentLocalesWebpackPlugin from 'moment-locales-webpack-plugin'

const dir = 'lka/casco-qoutation-detail',
    pagesDir = './src/pages'

const config = {
    ...commonConfig,
}

export default (env = {}) => {
    const ENV_IS_DEV = env.dev === true,
        ONLY_LOADER = env.onlyLoader === true

    console.log('ENV_IS_DEV', ENV_IS_DEV, 'ONLY_LOADER ', ONLY_LOADER)

    config.entry = {
        index: `${pagesDir}/${dir}/index.tsx`,
    }

    config.output = {
        path: `${pathDist}/js/pages/${dir}/`,
        filename: `[name]${ENV_IS_DEV ? '.dev' : '[chunkhash]'}.js`,
        // publicPath: `${
        //     ENV_IS_DEV ? 'http://euro-ins.lh' : 'https://euro-ins.ru'
        // }/front/v2/dist/js/calc/${dir}/`,
    }

    config.plugins = [
        ...config.plugins,
        new MiniCssExtractPlugin({
            filename: `[name]${ENV_IS_DEV ? '.dev' : '[chunkhash]'}.css`,
        }),
        new webpack.DefinePlugin({
            ENV_IS_DEV,
        }),
        new MomentLocalesWebpackPlugin({
            localesToKeep: ['ru'],
        }),
    ]

    config.optimization = {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
        runtimeChunk: 'single',
        namedChunks: true,
        moduleIds: 'named',
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    name: 'vendors',
                    reuseExistingChunk: true,
                },
            },
        },
    }

    config.externals = {
        react: 'React',
        'react-dom': 'ReactDOM',
    }

    config.stats = {
        children: false,
    }

    if (ENV_IS_DEV) config.devtool = 'source-map'

    if (ONLY_LOADER) {
        // Если собираем только файл загрузчика
        config.entry = {loader: `${pagesDir}/${dir}/loader.ts`}
        config.output.filename = `[name].js`
        config.optimization.runtimeChunk = undefined
        config.plugins.push(
            new CopyWebpackPlugin(
                {
                    patterns: [
                        { from: `${pagesDir}/${dir}/calculator.js`, to: `${pathDist}/js/calc/${dir}/calculator.js` },
                    ],
                })
        )
    }

    if (!ONLY_LOADER && !ENV_IS_DEV) {
        config.plugins.push(
            new CleanWebpackPlugin({
                dry: true,
                verbose: true,
                cleanOnceBeforeBuildPatterns: [`${pathDist}/js/calc/${dir}/`],
                dangerouslyAllowCleanPatternsOutsideProject: true
            }),
            new WebpackShellPlugin({
                onBuildEnd: [
                    `node src/webpack/loader/createLoader.js ${dir}`,
                ],
            })
        )
    }

    return config
}
