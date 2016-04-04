import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save(params) {
      var newTicket = this.store.createRecord('ticket', params);
      newTicket.save();
    }
  }
});
