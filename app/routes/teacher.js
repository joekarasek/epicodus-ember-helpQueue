import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('ticket');
  },
  actions: {
    click(ticket) {
      this.transitionTo('ticket-details', ticket.id);
    }
  }
});
