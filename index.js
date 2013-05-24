/*jslint nomen: true */
"use strict";

var _s = require("underscore.string");

function aton(str) {
    var laddr, i,
        parts = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/.exec(str);

    if (parts === null) {
        return null;
    }

    parts.shift();

    laddr = 0;
    for (i = 0; i < parts.length; i += 1) {
        if (i > 0) {
            laddr = laddr * 256;
        }
        laddr += parseInt(parts[i], 10);
    }

    return laddr;
}

function ntoa(laddr) {
    var i, data = [];
    for (i = 3; i >= 0; i -= 1) {
        data[i] = laddr % 256;
        laddr = Math.floor(laddr / 256);
    }
    return _s.join('.', data[0], data[1], data[2], data[3]);
}

exports.aton = aton;
exports.ntoa = ntoa;
