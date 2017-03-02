
import { signs } from './fixtures';
import * as createSmocksInstance from 'smocks';

const smocks = createSmocksInstance('fake-api');

smocks.route({
  id: 'signs',
  path: '/api/v2/signs',
  handler: (req, reply) => {
    console.log('signs');
    reply(signs);
  }
});

smocks.start({
  port: 8123,
  host: 'localhost'
}, {
  // smocks init options
}, function() {
  console.log('Test api started on localhost:8123');
});
