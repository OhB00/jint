// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * String.prototype.charCodeAt can't be used as constructor
 *
 * @path ch15/15.5/15.5.4/15.5.4.5/S15.5.4.5_A7.js
 * @description Checking if creating the String.prototype.charCodeAt object fails
 */

var __FACTORY = String.prototype.charCodeAt;

try {
  var __instance = new __FACTORY;
  $FAIL('#1: __FACTORY = String.prototype.charCodeAt; "__instance = new __FACTORY" lead to throwing exception');
} catch (e) {
    if (e instanceof Test262Error) throw e;
}

