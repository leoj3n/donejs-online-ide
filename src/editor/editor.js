import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './editor.less';
import view from './editor.stache';
import Files from '../models/files';
import loader from '@loader';

export const ViewModel = DefineMap.extend({
  xterm: 'any',
  message: {
    value: 'This is the ide-editor component'
  },
  get filesPromise() {
    return Files.getList({});
  },
  cmdRunner(theCommand) {
    return fetch(loader.serviceBaseURL + '/cmd', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ cmd: theCommand })
    }).then(response => response.text());
  }
});

export default Component.extend({
  tag: 'ide-editor',
  ViewModel,
  view,
  events: {
    inserted: function (el) {
      var vm = this.viewModel;
      if (System.isPlatform("window")) {
        vm.xterm.on('key', function (key, ev) {
          if (ev.keyCode === 13) {
            var promptLine = vm.xterm.lines.get(vm.xterm.ybase + vm.xterm.y)
              .slice(2);
            var commandToSend = promptLine.map((item) => item[1]).join('');
            console.log('ENTER EVENT', commandToSend);
            vm.cmdRunner(commandToSend).then(function (response) {
              vm.xterm.writeln("\r\n");
              vm.xterm.write(response.replace(/\r?\n/g, "\r\n"));
              vm.xterm.writeln('');
              vm.xterm.prompt();
            }).catch(function (err) {
              console.log('COMMAND RUNNER ERROR', err);
            });
          }
        });
      }
    }
  }
});
