import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save(params) {
      var newTicket = this.store.createRecord('ticket', params);
      var that = this;
      var ticketId = newTicket.id;
      newTicket.save().then(function(ticketId) {
        that.transitionTo('ticket', ticketId);
      });
    }
  }
});
