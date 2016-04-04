import Ember from 'ember';

export function timeDisplay(params) {
  var initTime = params[0];
  var d = new Date();
  var currentTime = d.getTime();
  return Math.floor((currentTime - initTime) / 60000);
}

export default Ember.Helper.helper(timeDisplay);
