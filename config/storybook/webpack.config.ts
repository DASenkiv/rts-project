// eslint-disable-next-line import/no-extraneous-dependencies
import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';

export default ({ config }: {config: webpack.Configuration}) => {
    const isDev = true;
    const paths: BuildPaths = {
        src: path.resolve(__dirname, '..', '..', 'src'),
        build: '',
        html: path.resolve(__dirname, '..', '..', 'public', 'index.html'),
        entry: '',
    };
    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx');
    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }
        return rule;
    });

    config.module.rules.push(buildSvgLoader());
    config.module.rules.push(buildCssLoader(isDev));
    config.plugins.push(new webpack.DefinePlugin({
        __IS_DEV__: JSON.stringify(isDev),
    }));
    return config;
};
