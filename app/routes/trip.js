import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    return this.store.find('trip', params.trip_id);
  },
  activate: function() {
    Ember.$('body').addClass('trips-index');
  },
  // setupController: function(controller, trip) {
  //   controller.set('model', trip);
  // },
  deactivate: function() {
    Ember.$('body').removeClass('trips-index');
  }
});
