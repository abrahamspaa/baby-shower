import html from 'rollup-plugin-template-html';
import copy from 'rollup-plugin-copy';
import postcss from 'rollup-plugin-postcss';
import simplevars from 'postcss-simple-vars';
import nested from 'postcss-nested';
import cssnext from 'postcss-cssnext';
import cssnano from 'cssnano';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
// import { uglify } from 'rollup-plugin-uglify';

export default {
  input: 'source/js/index.js',
  output: {
    file: 'build/bundle-[hash].min.js',
    format: 'iife',
    name: 'bundle',
  	sourceMap: 'inline'
  },
  plugins: [
    html({
      template: 'source/index.html',
      filename: 'index.html'
    }),
    copy({
      'source/images': 'build/images'
    }),
    postcss({
			plugins: [
				simplevars(),
				nested(),
				cssnext({ warnForDuplicates: false }),
				cssnano()
			],
			extensions: [ '.css' ]
		}),
    babel({
			exclude: 'node_modules/**'
		}),
    commonjs(),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    replace({
      exclude: 'node_modules/**',
      ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    // (process.env.NODE_ENV === 'production' && uglify())
  ]
}
