/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.14/15.4.4.14-2-9.js
 * @description Array.prototype.indexOf - 'length' is own accessor property that overrides an inherited accessor property
 */


function testcase() {
        var proto = {};
        Object.defineProperty(proto, "length", {
            get: function () {
                return 0;
            },
            configurable: true
        });

        var Con = function () {};
        Con.prototype = proto;

        var child = new Con();
        child[1] = true;

        Object.defineProperty(child, "length", {
            get: function () {
                return 2;
            },
            configurable: true
        });

        return Array.prototype.indexOf.call(child, true) === 1;
    }
runTestCase(testcase);
