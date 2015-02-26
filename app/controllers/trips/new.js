import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['trips'],

  name: null,
  startDate: null,
  endDate: null,
  users: null,

  actions: {

    saveTrip: function () {
      let newTrip = this.getProperties('name', 'startDate', 'endDate');

      this.store.createRecord('trip', newTrip).save();
    }
  }
});
