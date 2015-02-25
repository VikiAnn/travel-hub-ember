import {
  moduleForModel,
  test
} from 'ember-qunit';

import Ember from 'ember';
import User from 'travel-hub-ember/models/user';
import Post from 'travel-hub-ember/models/post';

moduleForModel('user', {
  needs: ['model:trip', 'model:post']
});

test('it exists', function(assert) {
  var model = this.subject();
  assert.ok(!!model);
});

test('it is an Ember Data model', function (assert) {
  assert.ok(this.subject() instanceof DS.Model);
});

test('it has posts', function(assert) {
  var User = this.store().modelFor('user');
  var relationship = Ember.get(User, 'relationshipsByName').get('posts');

  assert.equal(relationship.key, 'posts');
  assert.equal(relationship.kind, 'hasMany');
});

test('it has posts', function(assert) {
  var User = this.store().modelFor('user');
  var relationship = Ember.get(User, 'relationshipsByName').get('trips');

  assert.equal(relationship.key, 'trips');
  assert.equal(relationship.kind, 'hasMany');
});

test('it has a name', function (assert) {
  var property = User.metaForProperty('name');
  assert.strictEqual(property.type, 'string');
  assert.ok(property.isAttribute);
});

test('it has an email', function (assert) {
  var property = User.metaForProperty('email');
  assert.strictEqual(property.type, 'string');
  assert.ok(property.isAttribute);
});

test('it has a twitter username', function (assert) {
  var property = User.metaForProperty('twitterUsername');
  assert.strictEqual(property.type, 'string');
  assert.ok(property.isAttribute);
});

test('it has a instagram username', function (assert) {
  var property = User.metaForProperty('instagramUsername');
  assert.strictEqual(property.type, 'string');
  assert.ok(property.isAttribute);
});
