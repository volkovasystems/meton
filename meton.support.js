"use strict";

/*;
              	@module-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
              		@email: richeve.bebedor@gmail.com
              
              		Permission is hereby granted, free of charge, to any person obtaining a copy
              		of this software and associated documentation files (the "Software"), to deal
              		in the Software without restriction, including without limitation the rights
              		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              		copies of the Software, and to permit persons to whom the Software is
              		furnished to do so, subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included in all
              		copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              		SOFTWARE.
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "meton",
              			"path": "meton/meton.js",
              			"file": "meton.js",
              			"module": "meton",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/meton.git",
              			"test": "meton-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Extract a list of method names.
              
              		By default, this module will not include constructor
              			because they are classes and may produce issues with other modules.
              	@end-module-documentation
              
              	@include:
              		{
              			"conztant": "conztant",
              			"falzy": "falzy",
              			"portel": "portel",
              		}
              	@end-include
              */var _getOwnPropertyNames = require("babel-runtime/core-js/object/get-own-property-names");var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var conztant = require("conztant");
var falzy = require("falzy");
var portel = require("portel");

var meton = function meton(entity) {
	/*;
                                    	@meta-configuration:
                                    		{
                                    			"entity:required": "*"
                                    		}
                                    	@end-meta-configuration
                                    */

	if (falzy(entity)) {
		return [];
	}

	var constructor = entity;
	if ((typeof entity === "undefined" ? "undefined" : (0, _typeof3.default)(entity)) == "object") {
		constructor = entity.constructor;

	} else if (typeof entity != "function") {
		constructor = portel(entity).constructor;
	}

	var method = [];
	try {
		method = (0, _getOwnPropertyNames2.default)(entity);

	} catch (error) {
		return method;
	}

	return method.filter(function (property) {
		return (
			!conztant(property) &&
			typeof entity[property] == "function" &&
			property != "constructor" &&
			entity[property] !== constructor);

	});
};

module.exports = meton;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldG9uLnN1cHBvcnQuanMiXSwibmFtZXMiOlsiY29uenRhbnQiLCJyZXF1aXJlIiwiZmFsenkiLCJwb3J0ZWwiLCJtZXRvbiIsImVudGl0eSIsImNvbnN0cnVjdG9yIiwibWV0aG9kIiwiZXJyb3IiLCJmaWx0ZXIiLCJwcm9wZXJ0eSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkRBLElBQU1BLFdBQVdDLFFBQVMsVUFBVCxDQUFqQjtBQUNBLElBQU1DLFFBQVFELFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUUsU0FBU0YsUUFBUyxRQUFULENBQWY7O0FBRUEsSUFBTUcsUUFBUSxTQUFTQSxLQUFULENBQWdCQyxNQUFoQixFQUF3QjtBQUNyQzs7Ozs7Ozs7QUFRQSxLQUFJSCxNQUFPRyxNQUFQLENBQUosRUFBcUI7QUFDcEIsU0FBTyxFQUFQO0FBQ0E7O0FBRUQsS0FBSUMsY0FBY0QsTUFBbEI7QUFDQSxLQUFJLFFBQU9BLE1BQVAsdURBQU9BLE1BQVAsTUFBaUIsUUFBckIsRUFBK0I7QUFDOUJDLGdCQUFjRCxPQUFPQyxXQUFyQjs7QUFFQSxFQUhELE1BR00sSUFBSSxPQUFPRCxNQUFQLElBQWlCLFVBQXJCLEVBQWlDO0FBQ3RDQyxnQkFBY0gsT0FBUUUsTUFBUixFQUFpQkMsV0FBL0I7QUFDQTs7QUFFRCxLQUFJQyxTQUFTLEVBQWI7QUFDQSxLQUFHO0FBQ0ZBLFdBQVMsbUNBQTRCRixNQUE1QixDQUFUOztBQUVBLEVBSEQsQ0FHQyxPQUFPRyxLQUFQLEVBQWM7QUFDZCxTQUFPRCxNQUFQO0FBQ0E7O0FBRUQsUUFBT0EsT0FBT0UsTUFBUCxDQUFlLFVBQUVDLFFBQUYsRUFBZ0I7QUFDckM7QUFDQyxJQUFDVixTQUFVVSxRQUFWLENBQUQ7QUFDRyxVQUFPTCxPQUFRSyxRQUFSLENBQVAsSUFBNkIsVUFEaEM7QUFFR0EsZUFBWSxhQUZmO0FBR0dMLFVBQVFLLFFBQVIsTUFBdUJKLFdBSjNCOztBQU1BLEVBUE0sQ0FBUDtBQVFBLENBckNEOztBQXVDQUssT0FBT0MsT0FBUCxHQUFpQlIsS0FBakIiLCJmaWxlIjoibWV0b24uc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyo7XHJcblx0QG1vZHVsZS1saWNlbnNlOlxyXG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcblx0XHRAbWl0LWxpY2Vuc2VcclxuXHJcblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXHJcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cclxuXHJcblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuXHRcdFNPRlRXQVJFLlxyXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcclxuXHJcblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxyXG5cdFx0e1xyXG5cdFx0XHRcInBhY2thZ2VcIjogXCJtZXRvblwiLFxyXG5cdFx0XHRcInBhdGhcIjogXCJtZXRvbi9tZXRvbi5qc1wiLFxyXG5cdFx0XHRcImZpbGVcIjogXCJtZXRvbi5qc1wiLFxyXG5cdFx0XHRcIm1vZHVsZVwiOiBcIm1ldG9uXCIsXHJcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXHJcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXHJcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcclxuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcclxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcclxuXHRcdFx0XSxcclxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL21ldG9uLmdpdFwiLFxyXG5cdFx0XHRcInRlc3RcIjogXCJtZXRvbi10ZXN0LmpzXCIsXHJcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcclxuXHRcdH1cclxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXHJcblxyXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcclxuXHRcdEV4dHJhY3QgYSBsaXN0IG9mIG1ldGhvZCBuYW1lcy5cclxuXHJcblx0XHRCeSBkZWZhdWx0LCB0aGlzIG1vZHVsZSB3aWxsIG5vdCBpbmNsdWRlIGNvbnN0cnVjdG9yXHJcblx0XHRcdGJlY2F1c2UgdGhleSBhcmUgY2xhc3NlcyBhbmQgbWF5IHByb2R1Y2UgaXNzdWVzIHdpdGggb3RoZXIgbW9kdWxlcy5cclxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcImNvbnp0YW50XCI6IFwiY29uenRhbnRcIixcclxuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCIsXHJcblx0XHRcdFwicG9ydGVsXCI6IFwicG9ydGVsXCIsXHJcblx0XHR9XHJcblx0QGVuZC1pbmNsdWRlXHJcbiovXHJcblxyXG5jb25zdCBjb256dGFudCA9IHJlcXVpcmUoIFwiY29uenRhbnRcIiApO1xyXG5jb25zdCBmYWx6eSA9IHJlcXVpcmUoIFwiZmFsenlcIiApO1xyXG5jb25zdCBwb3J0ZWwgPSByZXF1aXJlKCBcInBvcnRlbFwiICk7XHJcblxyXG5jb25zdCBtZXRvbiA9IGZ1bmN0aW9uIG1ldG9uKCBlbnRpdHkgKXtcclxuXHQvKjtcclxuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImVudGl0eTpyZXF1aXJlZFwiOiBcIipcIlxyXG5cdFx0XHR9XHJcblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxyXG5cdCovXHJcblxyXG5cdGlmKCBmYWx6eSggZW50aXR5ICkgKXtcclxuXHRcdHJldHVybiBbIF07XHJcblx0fVxyXG5cclxuXHRsZXQgY29uc3RydWN0b3IgPSBlbnRpdHk7XHJcblx0aWYoIHR5cGVvZiBlbnRpdHkgPT0gXCJvYmplY3RcIiApe1xyXG5cdFx0Y29uc3RydWN0b3IgPSBlbnRpdHkuY29uc3RydWN0b3I7XHJcblxyXG5cdH1lbHNlIGlmKCB0eXBlb2YgZW50aXR5ICE9IFwiZnVuY3Rpb25cIiApe1xyXG5cdFx0Y29uc3RydWN0b3IgPSBwb3J0ZWwoIGVudGl0eSApLmNvbnN0cnVjdG9yO1xyXG5cdH1cclxuXHJcblx0bGV0IG1ldGhvZCA9IFsgXTtcclxuXHR0cnl7XHJcblx0XHRtZXRob2QgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyggZW50aXR5ICk7XHJcblxyXG5cdH1jYXRjaCggZXJyb3IgKXtcclxuXHRcdHJldHVybiBtZXRob2Q7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbWV0aG9kLmZpbHRlciggKCBwcm9wZXJ0eSApID0+IHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdCFjb256dGFudCggcHJvcGVydHkgKVxyXG5cdFx0XHQmJiB0eXBlb2YgZW50aXR5WyBwcm9wZXJ0eSBdID09IFwiZnVuY3Rpb25cIlxyXG5cdFx0XHQmJiBwcm9wZXJ0eSAhPSBcImNvbnN0cnVjdG9yXCJcclxuXHRcdFx0JiYgZW50aXR5WyBwcm9wZXJ0eSBdICE9PSBjb25zdHJ1Y3RvclxyXG5cdFx0KTtcclxuXHR9ICk7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG1ldG9uO1xyXG4iXX0=
//# sourceMappingURL=meton.support.js.map
