import connect from 'can-connect';
import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import set from 'can-set';

import feathersServiceBehavior from 'can-connect-feathers/service';
import dataParse from 'can-connect/data/parse/';
import realtime from 'can-connect/real-time/';
import construct from 'can-connect/constructor/';
import constructStore from 'can-connect/constructor/store/';
import constructCallbacksOnce from 'can-connect/constructor/callbacks-once/';
import canMap from 'can-connect/can/map/';
import canRef from 'can-connect/can/ref/';
import dataCallbacks from 'can-connect/data/callbacks/';

import feathersClient from './feathers';

const filesService = feathersClient.service('/files');

const Files = DefineMap.extend('Files', {
  seal: false
}, {
    'id': '*',
    body: 'string'
  });

Files.algebra = new set.Algebra(
  set.comparators.id('id')
);

Files.List = DefineList.extend({
  '*': Files
});

Files.connection = connect([
  feathersServiceBehavior,
  dataParse,
  construct,
  constructStore,
  constructCallbacksOnce,
  canMap,
  canRef,
  dataCallbacks,
  realtime
], {
    idProp: 'id',
    Map: Files,
    List: Files.List,
    name: 'files',
    feathersService: filesService,
    algebra: Files.algebra
  });

export default Files;
