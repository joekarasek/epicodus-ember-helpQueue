import Ember from 'ember';

export default Ember.Component.extend({
  isFormShowing: true,
  classNames: ['well'],
  actions: {
    save() {
      var params = {
        names: this.get('names'),
        location: this.get('location'),
        notes: this.get('notes')
      };
      this.sendAction('save', params);
      this.set('isFormShowing', false);
    }, showForm() {
      this.set('isFormShowing', true);
    }
  }
});
