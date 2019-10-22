# Wòch
[![Build Status](https://secure.travis-ci.org/leny/woch.png?branch=master)](http://travis-ci.org/leny/woch) [![No Maintenance Intended](http://unmaintained.tech/badge.svg)](http://unmaintained.tech/)

Yet a simple in-memory key/value storage module

## Getting Started
Install the module with: `npm install woch`

## Usage

Require module.

```javascript
var Woch = require( "woch" );
```

### Store/set item

```javascript
Woch.set( key, value );
Woch.setItem( key, value );
```

### Retrieve/get item

```javascript
Woch.get( key );
Woch.getItem( key );
```

### Retrieve/get all items

```javascript
Woch.keys();
```

### Test key

```javascript
Woch.has( key );
```

### Get item at index

```javascript
Woch.key( index );
```

### Remove/delete item

```javascript
Woch.remove( key );
Woch.removeItem( key );
```

### Remove/delete all items

```javascript
Woch.clear();
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
**2013-09-06:** v0.1.0 - *initial version*

## License
Copyright (c) 2013 Leny
Licensed under the MIT license.
