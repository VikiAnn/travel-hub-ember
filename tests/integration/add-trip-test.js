import Ember from 'ember';
import { test } from 'ember-qunit';
import { module } from 'qunit';
import startApp from '../helpers/start-app';
var App;

module('Integration - Add trip', {
  setup: function () {
    App = startApp();
  },
  teardown: function () {
    Ember.run(App, 'destroy');
  }
});

test('it can add a trip', function (assert) {
  visit('/trips/new').then(function () {
    fillIn('input.name', 'My Amazing Trip');
    fillIn('input.start-date', '05/13/2015');
    fillIn('input.end-date', '05/18/2015');
    click('button.submit');

    andThen(function () {
      assert.equal(find('ul.trips li:last').text(), 'My Amazing Trip - (05/13/2015 to 05/18/2015)');
    });
  });
});
