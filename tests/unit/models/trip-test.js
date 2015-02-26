import {
  moduleForModel,
  test
} from 'ember-qunit';

import Ember from 'ember';
import Trip from 'travel-hub-ember/models/trip';
import User from 'travel-hub-ember/models/user';

moduleForModel('trip', {
  needs: ['model:user', 'model:post']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});

test('it is an Ember Data model', function (assert) {
  assert.ok(this.subject() instanceof DS.Model);
});

test('it has a name', function (assert) {
  var property = Trip.metaForProperty('name');
  assert.strictEqual(property.type, 'string');
  assert.ok(property.isAttribute);
});

test('it has a start date', function (assert) {
  var property = Trip.metaForProperty('startDate');
  assert.strictEqual(property.type, 'string');
  assert.ok(property.isAttribute);
});

test('it has a end date', function (assert) {
  var property = Trip.metaForProperty('endDate');
  assert.strictEqual(property.type, 'string');
  assert.ok(property.isAttribute);
});

test('it has users', function (assert) {
  var Trip = this.store().modelFor('trip');
  var relationship = Ember.get(Trip, 'relationshipsByName').get('users');

  assert.equal(relationship.key, 'users');
  assert.equal(relationship.kind, 'hasMany');
});
