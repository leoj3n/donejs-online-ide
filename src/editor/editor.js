import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './editor.less';
import view from './editor.stache';
import Files from '../models/files';
import loader from '@loader';

export const ViewModel = DefineMap.extend({
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
  view
});
