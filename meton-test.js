
const assert = require( "assert" );
const meton = require( "./meton.js" );

class A {
	constructor( ){ }
	getA( ){ }
}

class B extends A {
	constructor( ){ super( ); }
	getB( ){ }
}

assert.deepEqual( meton( B.prototype ), [ "getB" ], "should be equal to [ 'getB' ]" );

console.log( "ok" );
