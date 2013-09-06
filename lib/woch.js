/*
 * woch
 * https://github.com/leny/woch
 *
 * Copyright (c) 2013 Leny
 * Licensed under the MIT license.
 */

"use strict";

var oData = {},
    clearData,
    hasKey,
    getIndex,
    getItem,
    setItem,
    removeItem,
    getKeys,
    getKeysAmount,
    oWoch;

clearData = function() {
    oData = {};
}; // clearData

hasKey = function( sKey ) {
    return oData[ sKey ] !== undefined;
}; // hasKey

getIndex = function( iIndex ) {
    return Object.keys( oData )[ iIndex ];
}; // getIndex

getItem = function( sKey ) {
    return hasKey( sKey ) ? oData[ sKey ] : undefined;
}; // getItem

setItem = function( sKey, mValue ) {
    oData[ sKey ] = mValue;
}; // setItem

removeItem = function( sKey ) {
    delete oData[ sKey ];
}; // removeItem

getKeys = function() {
    return Object.keys( oData );
}; // getKeys

getKeysAmount = function() {
    return Object.keys( oData ).length;
}; // getKeysAmount

oWoch = {
    "clear": clearData,
    "has": hasKey,
    "key": getIndex,
    "get": getItem,
    "getItem": getItem,
    "set": setItem,
    "setItem": setItem,
    "remove": removeItem,
    "removeItem": removeItem,
    "keys": getKeys
};

oWoch.__defineGetter__( "length", getKeysAmount );

module.exports = oWoch;
