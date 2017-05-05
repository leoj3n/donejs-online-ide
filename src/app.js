import DefineMap from 'can-define/map/';
import route from 'can-route';
import 'can-route-pushstate';
import 'can-stache-bindings';

const AppViewModel = DefineMap.extend({
  page: 'string',
  title: {
    value: 'DoneJS IDE',
    serialize: false
  },
  fileid: 'string',
  fileClicked (id) {
    console.log('CLICKED', id);
    this.body = id;
  },
  body: {
    type: 'string'
  }
});

route('/{page}', { page: 'home' });

export default AppViewModel;
