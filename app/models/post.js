import DS from 'ember-data';

let Post = DS.Model.extend({
  userID: DS.attr('number'),
  postDate: DS.attr('date'),
  source: DS.attr('string'),
  text: DS.attr('string'),
  imageUrl: DS.attr('string'),
  thumbnailUrl: DS.attr('string'),
  locationName: DS.attr('string'),
  latitude: DS.attr('string'),
  longitude: DS.attr('string'),
  link: DS.attr('string'),
  likes: DS.attr('number')
})

Post.reopenClass({
  FIXTURES: [
    {
      "id": 1,
      "userID": 1,
      "postDate": "01/13/2013",
      "source": "twitter",
      "text": "This is a tweet, yo!",
      "imageUrl": "https://placekitten.com/g/200/300",
      "thumbnailUrl": "https://placekitten.com/g/96/96",
      "locationName": "Bermuda, I dunno",
      "latitude": "bermuda triangle x",
      "longitude": "bermuda triangle y",
      "link": "http://twitter.com",
      "likes": 0
    },
    {
      "id": 2,
      "userID": 1,
      "postDate": "01/14/2013",
      "source": "twitter",
      "text": "This is another tweet, yo!",
      "imageUrl": "https://placekitten.com/g/200/300",
      "thumbnailUrl": "https://placekitten.com/g/96/96",
      "locationName": "Bermuda, I dunno",
      "latitude": "bermuda triangle x",
      "longitude": "bermuda triangle y",
      "link": "http://twitter.com",
      "likes": 0
    },
    {
      "id": 3,
      "userID": 2,
      "postDate": "01/13/2013",
      "source": "twitter",
      "text": "This is a tweet, yo!",
      "imageUrl": "https://placekitten.com/g/200/300",
      "thumbnailUrl": "https://placekitten.com/g/96/96",
      "locationName": "Bermuda, I dunno",
      "latitude": "bermuda triangle x",
      "longitude": "bermuda triangle y",
      "link": "http://twitter.com",
      "likes": 0
    },
    {
      "id": 4,
      "userID": 2,
      "postDate": "01/14/2013",
      "source": "twitter",
      "text": "This is another tweet, yo!",
      "imageUrl": "https://placekitten.com/g/200/300",
      "thumbnailUrl": "https://placekitten.com/g/96/96",
      "locationName": "Bermuda, I dunno",
      "latitude": "bermuda triangle x",
      "longitude": "bermuda triangle y",
      "link": "http://twitter.com",
      "likes": 0
    },
    {
      "id": 5,
      "userID": 3,
      "postDate": "01/13/2013",
      "source": "twitter",
      "text": "This is a tweet, yo!",
      "imageUrl": "https://placekitten.com/g/200/300",
      "thumbnailUrl": "https://placekitten.com/g/96/96",
      "locationName": "Bermuda, I dunno",
      "latitude": "bermuda triangle x",
      "longitude": "bermuda triangle y",
      "link": "http://twitter.com",
      "likes": 0
    }
  ]
});

export default Post;
