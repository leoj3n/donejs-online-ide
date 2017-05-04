import feathers from 'feathers/client';
import socketio from 'feathers-socketio/client';
import io from 'socket.io-client/dist/socket.io';
import hooks from 'feathers-hooks';
import auth from 'feathers-authentication-client';
import loader from '@loader';
var socket = io(loader.serviceBaseURL, {
  transports: ['websocket']
});

var feathersClient = feathers()
  .configure(hooks())
  .configure(socketio(socket))
  .configure(auth());

export default feathersClient;