import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('trip', {
  needs: ['model:user', 'model:post']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
