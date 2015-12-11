import macroAlias from 'ember-computed-decorators/macro-alias';
// TODO: Would be nice to not do relative includes
import <%= camelizedModuleName %>Computed from '../computeds/<%= dasherizedModuleName %>';

export var <%= camelizedModuleName %> = macroAlias(<%= camelizedModuleName %>Computed);
