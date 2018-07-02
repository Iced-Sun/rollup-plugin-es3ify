import { transform } from 'es3ify';

export default function es3ify(options = {}) {
	return {
		name: 'es3ify',

		transformBundle(code) {
			options.fromString = true;
			delete options.inSourceMap;
			delete options.outSourceMap;

			// trigger sourcemap generation
			if (options.sourceMap !== false) {
				options.outSourceMap = 'x';
			}

			const result = transform(code);

			// Strip sourcemaps comment and extra \n
			if (result.map) {
				const commentPos = result.code.lastIndexOf('//#');
				result.code = result.code.slice(0, commentPos).trim();
			}

			return {code: result, map: null};

		}
	};
}
