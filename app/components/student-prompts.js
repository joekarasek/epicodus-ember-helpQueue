import Ember from 'ember';

export default Ember.Component.extend({
  state: 1,
  ticket: {},
  actions: {
    nextState() {
      var state = this.get('state');
      state++;
      this.set('state', state);
    }, save() {
      var params = {
        names: this.get('names'),
        location: this.get('location'),
        notes: this.get('notes')
      };
      this.sendAction('save', params);
    },
    delete() {

    }
  }
});
