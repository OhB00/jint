/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.22/15.4.4.22-3-17.js
 * @description Array.prototype.reduceRight - value of 'length' is a string containing a number with leading zeros
 */


function testcase() {

        var testResult1 = true;
        var testResult2 = false;
        function callbackfn(prevVal, curVal, idx, obj) {
            if (idx > 1) {
                testResult1 = false;
            }

            if (idx === 1) {
                testResult2 = true;
            }
            return false;
        }

        var obj = { 0: 12, 1: 11, 2: 9, length: "0002.00" };

        Array.prototype.reduceRight.call(obj, callbackfn, 1);
        return testResult1 && testResult2;
    }
runTestCase(testcase);
