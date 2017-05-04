import Component from 'can-component';
import DefineMap from 'can-define/map/';
import { Xterm } from 'donejs-xterm';
import './editor.less';
import view from './editor.stache';

const terminal = new Xterm();

export const ViewModel = DefineMap.extend({
	message: {
		value: 'This is the ide-editor component'
	}
});

export default Component.extend({
	tag: 'ide-editor',
	ViewModel,
	view
});