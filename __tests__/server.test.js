'use strict';

const supergoose = require('@code-fellows/supergoose');
const { server } = require('../src/server.js');
const mockRequest = supergoose(server);

describe('SERVER TESTS:', () => {

  it('404 on a bad route', async () => {
    const response = await mockRequest.get('/no-route');
    expect(response.status).toEqual(404);
  });

  it('404 on a bad method', async () => {
    const response = await mockRequest.put('/cat');
    expect(response.status).toEqual(404);
  });

});