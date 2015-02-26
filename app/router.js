import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('users', function() {});
  this.resource('posts', function() {});
  this.resource('trips', function() {
    this.resource('trip', { path: ':trip_id' });
    this.route('new');
  });
  this.route('index', { path: '/' });
});

export default Router;
