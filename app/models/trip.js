import DS from 'ember-data';

let Trip = DS.Model.extend({
  name: DS.attr('string'),
  start_date: DS.attr("date"),
  end_date: DS.attr("date")
});

Trip.reopenClass({
  FIXTURES: [
    {
      "id": 1,
      "name": "Steve's Emacs Trip",
      "start_date": "01/13/2013",
      "end_date": "01/13/2014"
    },
    {
      "id": 2,
      "name": "Jorge's Mexico Trip",
      "start_date": "07/13/2015",
      "end_date": "07/23/2015"
    },
    {
      "id": 3,
      "name": "Worace's Ski Trip",
      "start_date": "02/13/2014",
      "end_date": "03/1/2014"
    }
  ]
});

export default Trip;