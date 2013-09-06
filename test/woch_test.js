"use strict";

var woch = require("../lib/woch.js");

module.exports = {
    setUp: function( done ) {
        woch.clear();
        done();
    },

    "Woch Tests": function( test ) {
        woch.set( "foo", "bar" );
        woch.set( "bar", "foo" );
        test.equal( woch.length, 2, "woch.length should be 0" );
        woch.clear();
        test.equal( woch.length, 0, "woch.length should be 0" );

        woch.set( "foo", "bar" );

        test.equal( woch.has( "foo" ), true, "woch.has( \"foo\" ) should be true" );
        test.equal( woch.has( "bar" ), false, "woch.has( \"bar\" ) should be false" );

        woch.set( "bar", "foo" );

        test.equal( woch.key( 1 ), "bar", "woch.key( 1 ) should be \"bar\"" );
        test.equal( woch.key( 2 ), undefined, "woch.key( 2 ) should be undefined" );

        woch.clear();
        test.equal( woch.length, 0, "woch.length should be 0" );

        var oObject = { "foo": 42, "bar": { "baz": false } };
        var aArray = [ 1, 2, 3 ];

        woch.set( "string", "bar" );
        woch.set( "number", 42 );
        woch.set( "array", aArray );
        woch.set( "object", oObject );
        woch.set( "bool", true );
        woch.set( "constructor", "foo" );

        test.equal( woch.get( "string" ), "bar", "woch.get( \"string\" ) should be \"bar\"" );
        test.equal( woch.get( "number" ), 42, "woch.get( \"number\" ) should be 42" );
        test.equal( woch.get( "array" ), aArray, "woch.get( \"array\" ) should be [Array]" );
        test.deepEqual( woch.get( "object" ), oObject, "woch.get( \"object\" ) should be {Object}" );
        test.strictEqual( woch.get( "bool" ), true, "woch.get( \"bool\" ) should be true" );
        test.equal( woch.get( "unknown" ), undefined, "woch.get( \"string\" ) should be undefined" );
        test.equal( woch.get( "constructor" ), "foo", "woch.get( \"constructor\" ) should be \"foo\"" );

        test.equal( woch.getItem( "string" ), "bar", "woch.getItem( \"string\" ) should be \"bar\"" );
        test.equal( woch.getItem( "number" ), 42, "woch.getItem( \"number\" ) should be 42" );
        test.equal( woch.getItem( "array" ), aArray, "woch.getItem( \"array\" ) should be [Array]" );
        test.deepEqual( woch.getItem( "object" ), oObject, "woch.getItem( \"object\" ) should be {Object}" );
        test.strictEqual( woch.getItem( "bool" ), true, "woch.getItem( \"bool\" ) should be true" );
        test.equal( woch.getItem( "unknown" ), undefined, "woch.getItem( \"string\" ) should be undefined" );

        woch.remove( "string" );
        test.equal( woch.get( "string" ), undefined, "woch.get( \"string\" ) should be undefined" );

        woch.removeItem( "number" );
        test.equal( woch.get( "number" ), undefined, "woch.get( \"number\" ) should be undefined" );

        woch.clear();
        test.equal( woch.length, 0, "woch.length should be 0" );

        woch.set( "string", "bar" );
        woch.set( "number", 42 );
        woch.set( "array", aArray );
        woch.set( "object", oObject );
        woch.set( "bool", true );

        test.deepEqual( woch.keys(), [ "string", "number", "array", "object", "bool" ], "woch.keys() should be [ \"string\", \"number\", \"array\", \"object\", \"bool\" ]" );

        woch.clear();
        test.equal( woch.length, 0, "woch.length should be 0" );

        test.done();
    }
};
