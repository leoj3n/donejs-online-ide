import QUnit from 'steal-qunit';
import { ViewModel } from './editor';

// ViewModel unit tests
QUnit.module('donejs-online-ide/editor');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.message, 'This is the ide-editor component');
});
