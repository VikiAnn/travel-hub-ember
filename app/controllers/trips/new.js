import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['trips'],

  name: null,
  startDate: null,
  endDate: null,
  twitterAccounts: null,
  instagramAccounts: null,

  actions: {

    saveTrip: function () {
      let newTrip = this.getProperties('name', 'startDate', 'endDate', 'twitterAccounts', 'instagramAccounts');

      this.store.createRecord('trip', newTrip).save();
    }
  }
});
