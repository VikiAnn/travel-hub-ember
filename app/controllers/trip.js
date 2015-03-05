import Ember from 'ember';

export default Ember.ObjectController.extend({
  // needs: ['trips'],
  allPosts: function() {
    return this.get('content').map(function (user) {
      return user.posts;
    });
  }.property('content.[]')
});
