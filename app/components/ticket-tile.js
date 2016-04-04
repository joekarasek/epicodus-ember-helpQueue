import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['ticket-tile'],
  actions: {
    click(ticket) {
      this.sendAction('click', ticket);
    }
  }
});
