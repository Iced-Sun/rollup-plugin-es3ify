import buble from 'rollup-plugin-buble';

var external = Object.keys( require( './package.json' ).dependencies ).concat( 'path' );

export default {
	entry: 'src/index.js',
	plugins: [ buble()],
	external: external
};

/*
export default {
	entry: 'index.js',
	plugins: [buble()],
	targets: [
		{
			format: 'cjs',
			dest: pkg['main']
		},
		{
			format: 'es6',
			dest: pkg['jsnext:main']
		}
	]
};
 */
