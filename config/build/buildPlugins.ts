/* eslint-disable import/no-extraneous-dependencies */
import HTMLWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import { BuildOptions } from './types/config';

export function buildPlugins(
    options: BuildOptions,
): webpack.WebpackPluginInstance[] {
    const { paths, isDev } = options;

    const devPlugins = [];
    if (isDev) {
        devPlugins.push(new webpack.HotModuleReplacementPlugin());
        devPlugins.push(new BundleAnalyzerPlugin({
            openAnalyzer: false,
        }));
    }

    return [
        new HTMLWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
        ...devPlugins,
    ];
}
