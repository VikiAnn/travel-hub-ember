import DS from 'ember-data';
import Ember from 'ember';

export default DS.ActiveModelAdapter.extend({
  namespace: 'api/v1',
  host: 'http://localhost:3000'
});

Ember.ApplicationSerializer = DS.ActiveModelSerializer.extend({});
