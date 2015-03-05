import Ember from 'ember';

export default Ember.ObjectController.extend({

  allPosts: function() {
    return this.get('content').map(function (user) {
      return user.posts;
    });
  }.property('content.[]')
  
});
