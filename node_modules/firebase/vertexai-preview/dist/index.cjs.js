'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vertexaiPreview = require('@firebase/vertexai-preview');



Object.keys(vertexaiPreview).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () { return vertexaiPreview[k]; }
	});
});
//# sourceMappingURL=index.cjs.js.map
