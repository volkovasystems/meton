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
				"Vinse Vinalon"
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
			"protype": "protype"
		}
	@end-include
*/

const conztant = require( "conztant" );
const falzy = require( "falzy" );
const portel = require( "portel" );
const protype = require( "protype" );

const meton = function meton( entity ){
	/*;
		@meta-configuration:
			{
				"entity:required": "*"
			}
		@end-meta-configuration
	*/

	if( falzy( entity ) ){
		return [ ];
	}

	let constructor = entity;
	if( protype( entity, OBJECT ) ){
		constructor = entity.constructor;

	}else if( !protype( entity, FUNCTION ) ){
		constructor = portel( entity ).constructor;
	}

	try{
		return Object.getOwnPropertyNames( entity )
			.filter( ( property ) => {
				return !conztant( property ) &&
					protype( entity[ property ], FUNCTION ) &&
					property != "constructor" &&
					entity[ property ] !== constructor;
			} );

	}catch( error ){
		return [ ];
	}
};

module.exports = meton;
