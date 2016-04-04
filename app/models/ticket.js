import DS from 'ember-data';

export default DS.Model.extend({
  names: DS.attr(),
  location: DS.attr(),
  notes: DS.attr()
});
