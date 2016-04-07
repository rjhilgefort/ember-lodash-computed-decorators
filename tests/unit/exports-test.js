import Ember from 'ember';
import { test, module } from 'qunit';
/* jshint ignore:start */
import {
  isArguments,
  isArray,
  isBoolean,
  isDate,
  isElement,
  isEmpty,
  isFunction,
  isNaN,
  isNative,
  isNull,
  isNumber,
  isObject,
  isPlainObject,
  isRegExp,
  isString,
  isTypedArray,
  isUndefined,
  includes
  } from 'ember-lodash-computed-decorators';
/* jshint ignore:end */

module('Exports Decorators', {});

  test('Exports all objects', (assert) => {
    assert.expect(16);
    const testObject = Ember.Object.extend({
      /* jshint ignore:start */
      @isArguments('foo') isFooArgument,
      @isArray('foo') isFooArray,
      @isBoolean('foo') isFooBoolean,
      @isDate('foo') isFooDate,
      @isElement('foo') isFooElement,
      @isEmpty('foo') isFooEmpty,
      @isFunction('foo') isFooFunction,
      @isNaN('foo') isFooNaN,
      @isNative('foo') isFooNative,
      @isNull('foo') isFooNull,
      @isNumber('foo') isFooNumber,
      @isObject('foo') isFooObject,
      @isPlainObject('foo') isFooPlainObject,
      @isRegExp('foo') isFoRegExp,
      @isString('foo') isFooString,
      @isTypedArray('foo') isFooTypedArray,
      @isUndefined('foo') isFooUndefined,
      @includes('foo', 'f') includesf
      /* jshint ignore:end */
    });
    const obj = testObject.create({ foo: 'foo' });
    assert.equal(obj.get('isFooArgument'), false, 'isArguments exported');
    assert.equal(obj.get('isFooArray'), false, 'isArray exported');
    assert.equal(obj.get('isFooBoolean'), false, 'isBoolean exported');
    assert.equal(obj.get('isFooDate'), false, 'isDate exported');
    assert.equal(obj.get('isFooElement'), false, 'isElement exported');
    assert.equal(obj.get('isFooFunction'), false, 'isFunction exported');
    assert.equal(obj.get('isFooNaN'), false, 'isNaN exported');
    assert.equal(obj.get('isFooNative'), false, 'isNative exported');
    assert.equal(obj.get('isFooNull'), false, 'isNull exported');
    assert.equal(obj.get('isFooNumber'), false, 'isNumber exported');
    assert.equal(obj.get('isFooObject'), false, 'isObject exported');
    assert.equal(obj.get('isFooPlainObject'), false, 'isPlainObject exported');
    assert.equal(obj.get('isFooString'), true, 'isString exported');
    assert.equal(obj.get('isFooTypedArray'), false, 'isTypedArray exported');
    assert.equal(obj.get('isFooUndefined'), false, 'isUndefined exported');
    assert.equal(obj.get('includesf'), true, 'includes exported');
});
