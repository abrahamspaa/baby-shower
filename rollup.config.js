import babel from 'rollup-plugin-babel';
import { eslint } from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import { uglify } from 'rollup-plugin-uglify';
import postcss from 'rollup-plugin-postcss';
import simplevars from 'postcss-simple-vars';
import nested from 'postcss-nested';
import cssnext from 'postcss-cssnext';
import cssnano from 'cssnano';

export default {
	input: 'source/js/init.js',
  output: {
  	file: 'build/js/main.min.js',
  	format: 'iife',
  	sourceMap: 'inline'
 	},
	plugins: [
		postcss({
			plugins: [
				simplevars(),
				nested(),
				cssnext({ warnForDuplicates: false }),
				cssnano()
			],
			extensions: [ '.css' ]
		}),
		resolve({
			jsnext: true,
			main: true,
			browser: true,
		}),
		commonjs({
			namedExports: {
				'node_modules/materialize-css/dist/js/materialize.js': ['materialize']
			}
		}),
		eslint({
      exclude: 'source/css/**'
    }),
		babel({
			exclude: 'node_modules/**'
		}),
		replace({
      exclude: 'node_modules/**',
      ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
		}),
		(process.env.NODE_ENV === 'production' && uglify())
	]
};
