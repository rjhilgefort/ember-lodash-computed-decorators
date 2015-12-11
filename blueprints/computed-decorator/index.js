/**
 * EX: `ember generate computed-decorator foo`
 */
module.exports = {
  description: "Generates an ember-lodash-computed computed, as well as it's decorator.",

  beforeInstall: function(options) {
    this.lookupBlueprint('computed').install(options);
  },

  locals: function(options) {
    return options;
  },

  afterUninstall: function(options) {
    this.lookupBlueprint('computed').uninstall(options);
  }

};
