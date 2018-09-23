import babel from 'rollup-plugin-babel';
import { eslint } from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import { uglify } from 'rollup-plugin-uglify';

export default {
	input: 'source/js/init.js',
  output: {
  	file: 'build/js/main.min.js',
  	format: 'iife',
  	sourceMap: 'inline'
 	},
	plugins: [
		resolve({
			jsnext: true,
			main: true,
			browser: true,
		}),
		commonjs(),
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