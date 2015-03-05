import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('users', function() {});
  this.resource('posts', function() {});
  this.resource('trips', function() {
    this.route('new');
  });
  this.route('index', { path: '/' });
  this.resource('trip', { path: 'trips/:trip_id' });
});

export default Router;
