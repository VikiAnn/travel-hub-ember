import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.find("post");
  },
  activate: function() {
    Ember.$('body').addClass('posts-index');
  },
  deactivate: function() {
    Ember.$('body').removeClass('posts-index');
  }
});
