import fixture from 'can-fixture';
import Files from '../files';

const store = fixture.store([{
  id: 0,
  description: 'First item'
}, {
  id: 1,
  description: 'Second item'
}], Files.connection.algebra);

fixture('/files/{id}', store);

export default store;
