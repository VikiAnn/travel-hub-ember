import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('post', {
  needs: ['model:trip']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
