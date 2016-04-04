import Ember from 'ember';

export default Ember.Component.extend({
  ticketOpen: true,
  actions: {
    delete(ticket) {
      this.sendAction('delete', ticket);
      this.set('ticketOpen', false);
    }
  }
});
