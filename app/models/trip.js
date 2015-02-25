import DS from 'ember-data';

let Trip = DS.Model.extend({
  name:       DS.attr('string'),
  startDate: DS.attr("date"),
  users:      DS.hasMany('users', { async: true }),
  endDate:   DS.attr("date")
});

Trip.reopenClass({
  FIXTURES: [
    {
      "id": 1,
      "name": "Steve's Emacs Trip",
      "startDate": "01/13/2013",
      "endDate": "01/13/2014",
      "users": [2, 4]
    },
    {
      "id": 2,
      "name": "Jorge's Mexico Trip",
      "startDate": "07/13/2015",
      "endDate": "07/23/2015",
      "users": [1]
    },
    {
      "id": 3,
      "name": "Worace's Ski Trip",
      "startDate": "02/13/2014",
      "endDate": "03/1/2014",
      "users": [1, 3]
    }
  ]
});

export default Trip;
