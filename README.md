# ember-lodash-computed-decorators

#### decorators for lodash computed properties in `ember-lodash-computed`

## Installation

```shell
# ember-cli > 0.2.3
ember install ember-lodash-computed-decorators
# ember-cli <= 0.2.3
ember install:addon ember-lodash-computed-decorators
```

## Usage

```javascript
import Ember from 'ember';
import { isString } from 'ember-lodash-computed-decorators';

export default Ember.Object.create({
  foo: "foo",
  @isString('foo') isFooString, // true
});
```

## Implemented Computed Methods

- `isArguments`
- `isArray`
- `isBoolean`
- `isDate`
- `isElement`
- `isEmpty`
- `isFunction`
- `isNaN`
- `isNative`
- `isNull`
- `isNumber`
- `isObject`
- `isPlainObject`
- `isRegExp`
- `isString`
- `isTypedArray`
- `isUndefined`
