import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  model: function () {
      console.log("We logged in!");
  },

  actions: {
    sessionAuthenticationSucceeded: function () {
      console.log("We logged in!");
      this.transitionTo("index");
    }
  }
});
