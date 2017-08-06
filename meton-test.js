
const assert = require( "assert" );
const meton = require( "./meton.js" );

class A {
	constructor( ){ }
	getA( ){ }
}

class B extends A {
	constructor( ){ super( ); }
	getB( ){ }
	getC( ){ }
	getD( ){ }
	getE( ){ }
	getF( ){ }
	getG( ){ }
}

let duration = Date.now( );
assert.deepEqual( meton( B.prototype ), [ "getB", "getC", "getD", "getE", "getF", "getG" ], "should be deeply equal" );

console.log( "ok", Date.now( ) - duration, "ms" );
