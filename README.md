inet
====

Install with:

```javascript
$ npm install inet
```

Sample usage script:

```javascript
var inet = require("inet");

console.log(inet.aton("125.121.234.1"));
console.log(inet.ntoa(2107846951));
```

API Documentation
-----------------

### aton(str)

Given the dotted-quad representation of an IPv4 network address as a string, returns an integer that represents the numeric value of the address in network byte order (big endian). `aton()` returns `null` if it does not understand its argument. For IP Address of 'a.b.c.d', the numerical representation would be: a * 256^3 + b * 256^2 + c * 256 + d.

### ntoa(int)

Given a numeric IPv4 network address in network byte order, returns the dotted-quad representation of the address as a binary string. ntoa() returns null if it does not understand its argument.

