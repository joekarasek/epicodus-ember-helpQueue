import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      // var d = new Date();
      // var seconds = d.getTime();
      var params = {
        // names: this.get('names'),
        names: "this.get('names')",
        location: this.get('location'),
        notes: this.get('notes'),
        timestamp: 0
      };
      console.log(params.timestamp);
      debugger;
      this.sendAction('save', params);
      this.set('isFormShowing', false);
    }
  }
});
