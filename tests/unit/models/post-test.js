import {
  moduleForModel,
  test
} from 'ember-qunit';

import Ember from 'ember';
import Post from 'travel-hub-ember/models/post';
import User from 'travel-hub-ember/models/user';

moduleForModel('post', {
  needs: ['model:trip', 'model:user']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});

test('it is an Ember Data model', function (assert) {
  assert.ok(this.subject() instanceof DS.Model);
});

test('it has a user', function(assert) {
  var Post = this.store().modelFor('post');
  var relationship = Ember.get(Post, 'relationshipsByName').get('user');

  assert.equal(relationship.key, 'user');
  assert.equal(relationship.kind, 'belongsTo');
});

test('it has a postDate', function (assert) {
  var property = Post.metaForProperty('postDate');
  assert.strictEqual(property.type, 'date');
  assert.ok(property.isAttribute);
});

test('it has a social media source', function (assert) {
  var property = Post.metaForProperty('source');
  assert.strictEqual(property.type, 'string');
  assert.ok(property.isAttribute);
});

test('it has body text', function (assert) {
  var property = Post.metaForProperty('text');
  assert.strictEqual(property.type, 'string');
  assert.ok(property.isAttribute);
});

test('it has an image url', function (assert) {
  var property = Post.metaForProperty('imageUrl');
  assert.strictEqual(property.type, 'string');
  assert.ok(property.isAttribute);
});

test('it has a thumbnail url', function (assert) {
  var property = Post.metaForProperty('thumbnailUrl');
  assert.strictEqual(property.type, 'string');
  assert.ok(property.isAttribute);
});

test('it has the name of the location', function (assert) {
  var property = Post.metaForProperty('locationName');
  assert.strictEqual(property.type, 'string');
  assert.ok(property.isAttribute);
});

test('it has the latitude and longitude', function (assert) {
  var latitude = Post.metaForProperty('latitude');
  var longitude = Post.metaForProperty('longitude');

  assert.strictEqual(latitude.type, 'string');
  assert.ok(latitude.isAttribute);

  assert.strictEqual(longitude.type, 'string');
  assert.ok(longitude.isAttribute);
});

test('it has the link to original source', function (assert) {
  var property = Post.metaForProperty('link');
  assert.strictEqual(property.type, 'string');
  assert.ok(property.isAttribute);
});

test('it has the number of likes', function (assert) {
  var property = Post.metaForProperty('likes');
  var post = this.subject();

  assert.strictEqual(post.get('likes'), 0);
  assert.strictEqual(property.type, 'number');
  assert.ok(property.isAttribute);
});
