import {find} from 'globule'
import {basename, dirname, extname, join, relative} from 'path'
import {Configuration, DefinePlugin, Entry, optimize} from 'webpack'
import {resolve} from './util'

/** Options for base build */
interface Options {
  source: string
  destination: string
  useCache: boolean
}

/**
 * Build base Webpack configuration with defaults that can be expanded upon
 * @property options Base configuration options
 * @return Webpack configuration
 */
export function createBase({source, destination, useCache}: Options) {
  let config: Configuration = {
    entry: entries(source),
    output: {
      path: resolve(destination),
      filename: '[name].js',
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [{
            loader: 'awesome-typescript-loader',
            options: {useCache},
          }],
        },
        {test: /\.css$/, use: ['style-loader', 'css-loader']},
        {test: /\.(gif|jpg|jpeg|png|svg)$/, use: ['file-loader']},
      ],
    },
    plugins: [
      new DefinePlugin({'process.env.IS_CLIENT': '"true"'}),
    ],
    resolve: {
      extensions: [
        '.js',
        '.json',
        '.ts',
        '.tsx',
      ],
    },
  }

  // If there are more than one generated JS files, create a file that contains
  // shared code among all generated JS files called common.js
  if(Object.keys(config.entry).length > 1) {
    config = {
      ...config,
      plugins: [
        ...config.plugins || [],
        new optimize.CommonsChunkPlugin({name: 'common'}),
      ],
    }
  }

  return config
}

/**
 * Build entries configuration for Webpack based on our app structure by
 * looking for all top-level JS files in source to compile
 * @param source Source directory
 * @return Entries configuration for Webpack
 */
function entries(source: string) {
  return find(resolve(source, '**/*.ts{,x}'))
    .map(file => ({
      file,
      base: basename(file, extname(file)),
      dir: dirname(relative(resolve(source), file)),
    }))
    .reduce((obj, {base, dir, file}) => ({
      ...obj,
      [join(dir, base)]: [file],
    }), {} as Entry)
}
