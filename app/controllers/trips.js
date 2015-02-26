import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['trips'],

  name: null,
  startDate: null,
  endDate: null,
  users: null,

  actions: {

    saveTrip: function () {
      var name = this.get('name');
      var startDate = this.get('startDate');
      var endDate = this.get('endDate');

      this.store.createRecord('trip', {
        name: name,
        startDate: startDate,
        endDate: endDate
      }).save().then(function (trip) {
        this.transitionToRoute('trips', trip);
      }.bind(this));
    }
  }
});
