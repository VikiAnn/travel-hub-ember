import DS from 'ember-data';

let Trip = DS.Model.extend({
  name:       DS.attr('string'),
  startDate: DS.attr("string"),
  user:      DS.belongsTo('user', { async: true }),
  posts: DS.hasMany('posts', { async: true }),
  endDate:   DS.attr("string"),
  twitterAccounts: DS.attr("string"),
  instagramAccounts: DS.attr("string")
});

export default Trip;
