import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";

import {BuildOptions} from "./types/config";

export function buildPlugins(options: BuildOptions): webpack.WebpackPluginInstance[] {
    const {paths} = options;

    return [
        new HTMLWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin()
    ]
}