import DS from 'ember-data';

export default DS.Model.extend({
  names: DS.attr('string'),
  location: DS.attr('string'),
  notes: DS.attr('string')
});
