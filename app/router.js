import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('student');
  this.route('teacher');
  this.route('ticket', { path: '/ticket/:ticket_id'});
  this.route('ticket-details', {path:
  '/ticket-details/:ticket_id'});
});

export default Router;
