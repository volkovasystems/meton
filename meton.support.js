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

	try {
		return (0, _getOwnPropertyNames2.default)(entity).
		filter(function (property) {
			return !conztant(property) &&
			typeof entity[property] == "function" &&
			property != "constructor" &&
			entity[property] !== constructor;
		});

	} catch (error) {
		return [];
	}
};

module.exports = meton;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldG9uLnN1cHBvcnQuanMiXSwibmFtZXMiOlsiY29uenRhbnQiLCJyZXF1aXJlIiwiZmFsenkiLCJwb3J0ZWwiLCJtZXRvbiIsImVudGl0eSIsImNvbnN0cnVjdG9yIiwiZmlsdGVyIiwicHJvcGVydHkiLCJlcnJvciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkRBLElBQU1BLFdBQVdDLFFBQVMsVUFBVCxDQUFqQjtBQUNBLElBQU1DLFFBQVFELFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUUsU0FBU0YsUUFBUyxRQUFULENBQWY7O0FBRUEsSUFBTUcsUUFBUSxTQUFTQSxLQUFULENBQWdCQyxNQUFoQixFQUF3QjtBQUNyQzs7Ozs7Ozs7QUFRQSxLQUFJSCxNQUFPRyxNQUFQLENBQUosRUFBcUI7QUFDcEIsU0FBTyxFQUFQO0FBQ0E7O0FBRUQsS0FBSUMsY0FBY0QsTUFBbEI7QUFDQSxLQUFJLFFBQU9BLE1BQVAsdURBQU9BLE1BQVAsTUFBaUIsUUFBckIsRUFBK0I7QUFDOUJDLGdCQUFjRCxPQUFPQyxXQUFyQjs7QUFFQSxFQUhELE1BR00sSUFBSSxPQUFPRCxNQUFQLElBQWlCLFVBQXJCLEVBQWlDO0FBQ3RDQyxnQkFBY0gsT0FBUUUsTUFBUixFQUFpQkMsV0FBL0I7QUFDQTs7QUFFRCxLQUFHO0FBQ0YsU0FBTyxtQ0FBNEJELE1BQTVCO0FBQ0xFLFFBREssQ0FDRyxVQUFFQyxRQUFGLEVBQWdCO0FBQ3hCLFVBQU8sQ0FBQ1IsU0FBVVEsUUFBVixDQUFEO0FBQ04sVUFBT0gsT0FBUUcsUUFBUixDQUFQLElBQTZCLFVBRHZCO0FBRU5BLGVBQVksYUFGTjtBQUdOSCxVQUFRRyxRQUFSLE1BQXVCRixXQUh4QjtBQUlBLEdBTkssQ0FBUDs7QUFRQSxFQVRELENBU0MsT0FBT0csS0FBUCxFQUFjO0FBQ2QsU0FBTyxFQUFQO0FBQ0E7QUFDRCxDQWpDRDs7QUFtQ0FDLE9BQU9DLE9BQVAsR0FBaUJQLEtBQWpCIiwiZmlsZSI6Im1ldG9uLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qO1xyXG5cdEBtb2R1bGUtbGljZW5zZTpcclxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxyXG5cdFx0QG1pdC1saWNlbnNlXHJcblxyXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxyXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXHJcblxyXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxyXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXHJcblx0XHRTT0ZUV0FSRS5cclxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXHJcblxyXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcclxuXHRcdHtcclxuXHRcdFx0XCJwYWNrYWdlXCI6IFwibWV0b25cIixcclxuXHRcdFx0XCJwYXRoXCI6IFwibWV0b24vbWV0b24uanNcIixcclxuXHRcdFx0XCJmaWxlXCI6IFwibWV0b24uanNcIixcclxuXHRcdFx0XCJtb2R1bGVcIjogXCJtZXRvblwiLFxyXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxyXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxyXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXHJcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXHJcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXHJcblx0XHRcdF0sXHJcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9tZXRvbi5naXRcIixcclxuXHRcdFx0XCJ0ZXN0XCI6IFwibWV0b24tdGVzdC5qc1wiLFxyXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXHJcblx0XHR9XHJcblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxyXG5cclxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XHJcblx0XHRFeHRyYWN0IGEgbGlzdCBvZiBtZXRob2QgbmFtZXMuXHJcblxyXG5cdFx0QnkgZGVmYXVsdCwgdGhpcyBtb2R1bGUgd2lsbCBub3QgaW5jbHVkZSBjb25zdHJ1Y3RvclxyXG5cdFx0XHRiZWNhdXNlIHRoZXkgYXJlIGNsYXNzZXMgYW5kIG1heSBwcm9kdWNlIGlzc3VlcyB3aXRoIG90aGVyIG1vZHVsZXMuXHJcblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxyXG5cclxuXHRAaW5jbHVkZTpcclxuXHRcdHtcclxuXHRcdFx0XCJjb256dGFudFwiOiBcImNvbnp0YW50XCIsXHJcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiLFxyXG5cdFx0XHRcInBvcnRlbFwiOiBcInBvcnRlbFwiLFxyXG5cdFx0fVxyXG5cdEBlbmQtaW5jbHVkZVxyXG4qL1xyXG5cclxuY29uc3QgY29uenRhbnQgPSByZXF1aXJlKCBcImNvbnp0YW50XCIgKTtcclxuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcclxuY29uc3QgcG9ydGVsID0gcmVxdWlyZSggXCJwb3J0ZWxcIiApO1xyXG5cclxuY29uc3QgbWV0b24gPSBmdW5jdGlvbiBtZXRvbiggZW50aXR5ICl7XHJcblx0Lyo7XHJcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJlbnRpdHk6cmVxdWlyZWRcIjogXCIqXCJcclxuXHRcdFx0fVxyXG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cclxuXHQqL1xyXG5cclxuXHRpZiggZmFsenkoIGVudGl0eSApICl7XHJcblx0XHRyZXR1cm4gWyBdO1xyXG5cdH1cclxuXHJcblx0bGV0IGNvbnN0cnVjdG9yID0gZW50aXR5O1xyXG5cdGlmKCB0eXBlb2YgZW50aXR5ID09IFwib2JqZWN0XCIgKXtcclxuXHRcdGNvbnN0cnVjdG9yID0gZW50aXR5LmNvbnN0cnVjdG9yO1xyXG5cclxuXHR9ZWxzZSBpZiggdHlwZW9mIGVudGl0eSAhPSBcImZ1bmN0aW9uXCIgKXtcclxuXHRcdGNvbnN0cnVjdG9yID0gcG9ydGVsKCBlbnRpdHkgKS5jb25zdHJ1Y3RvcjtcclxuXHR9XHJcblxyXG5cdHRyeXtcclxuXHRcdHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyggZW50aXR5IClcclxuXHRcdFx0LmZpbHRlciggKCBwcm9wZXJ0eSApID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gIWNvbnp0YW50KCBwcm9wZXJ0eSApICYmXHJcblx0XHRcdFx0XHR0eXBlb2YgZW50aXR5WyBwcm9wZXJ0eSBdID09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0XHRcdFx0cHJvcGVydHkgIT0gXCJjb25zdHJ1Y3RvclwiICYmXHJcblx0XHRcdFx0XHRlbnRpdHlbIHByb3BlcnR5IF0gIT09IGNvbnN0cnVjdG9yO1xyXG5cdFx0XHR9ICk7XHJcblxyXG5cdH1jYXRjaCggZXJyb3IgKXtcclxuXHRcdHJldHVybiBbIF07XHJcblx0fVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBtZXRvbjtcclxuIl19
//# sourceMappingURL=meton.support.js.map
