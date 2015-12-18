# ember-lodash-computed-decorators

#### Decorators for lodash computed properties in [ember-lodash-computed](https://github.com/rjhilgefort/ember-lodash-computed). This project version should stay in sync with `ember-lodash-computed` so the interface is consistent and expected.


## Installation

```shell
# ember-cli > 0.2.3
ember install ember-lodash-computed
ember install ember-lodash-computed-decorators
# ember-cli <= 0.2.3
ember install:addon ember-lodash-computed
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

## Blueprints

There are also blueprints added as part of this repo. You can generate custom computed decorator methods by doing the following. The command will generate the custom computed, as well as the decorator for said computed.

```shell
ember generate computed-decorator foo
```

After implementing the computed generated at `app/computeds/foo.js`, you can then use it in your project like so:

```javascript
import Ember from 'ember';
import { foo } from 'app/decorators/foo';

export default Ember.Object.create({
  bar: "bar",
  @foo('bar') barComputed,
});
```
