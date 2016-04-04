import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['container'],
  actions: {
    delete(ticket) {
      this.sendAction('delete', ticket);
    }
  }
});
