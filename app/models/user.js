import DS from 'ember-data';

let User = DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  instagram_username: DS.attr('string'),
  twitter_username: DS.attr('string')
});

User.reopenClass({
  FIXTURES: [
    {
      "id": 1,
      "name": "Jorge Tellez",
      "email": "jorge@example.com",
      "instagram_username": "jorge_on_instagram",
      "twitter_username": "jorge_on_twitter"
    },
    {
      "id": 2,
      "name": "Rachel Warbelow",
      "email": "rachel@example.com",
      "instagram_username": "rachel_on_instagram",
      "twitter_username": "rachel_on_twitter"
    },
    {
      "id": 3,
      "name": "Jeff Casimir",
      "email": "jeff@example.com",
      "instagram_username": "jeff_on_instagram",
      "twitter_username": "jeff_on_twitter"
    },
    {
      "id": 4,
      "name": "Steve Kinney",
      "email": "steve@example.com",
      "instagram_username": "steve_on_instagram",
      "twitter_username": "steve_on_twitter"
    },
  ]
});

export default User;
