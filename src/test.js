import F from 'funcunit';
import QUnit from 'steal-qunit';

import 'donejs-online-ide/models/test';

import 'donejs-online-ide/editor/editor-test';

F.attach(QUnit);

QUnit.module('donejs-online-ide functional smoke test', {
  beforeEach() {
    F.open('./development.html');
  }
});

QUnit.test('donejs-online-ide main page shows up', function() {
  F('title').text('donejs-online-ide', 'Title is set');
});
