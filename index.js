/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-lodash-computed-decorators', /**,

  isDevelopingAddon: function(app) {
    return true;
  }
  **/
  init: function(app) {
    this.options = this.options || {};
    this.options.babel = this.options.babel || {};
    this.options.babel.optional = this.options.babel.optional || [];

    if (this.options.babel.optional.indexOf('es7.decorators') === -1) {
      this.options.babel.optional.push('es7.decorators');
    }
  }
};
