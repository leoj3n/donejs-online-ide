import QUnit from 'steal-qunit';
import Files from './files';

QUnit.module('models/files');

QUnit.test('getList', function(){
  stop();
  Files.getList().then(function(items) {
    QUnit.equal(items.length, 2);
    QUnit.equal(items.item(0).description, 'First item');
    start();
  });
});
