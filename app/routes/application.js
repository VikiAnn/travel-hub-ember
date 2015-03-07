import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  model: function () {

  },

  actions: {
    sessionAuthenticationSucceeded: function () {
      var id = this.get('session.id');
      this.store.find('user', id);
      this.transitionTo("index");
    }
  }
});
