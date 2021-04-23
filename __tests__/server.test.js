'use strict';

const supergoose = require('@code-fellows/supergoose');
const { server } = require('../src/server.js');
const mockRequest = supergoose(server);

const GenericCollection = require('../src/models/data-collection-class.js');
const catModel = require('../src/models/cat-schema.js');
// const { findOneAndRemove } = require('../src/models/cat-schema.js');
const cat = new GenericCollection(catModel);

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

describe('CRUD/REST TESTS:', () => {

  it('can create() a new cat', () => {
    let obj = { name: 'test name 1', breed: 'test breed 1' };
    let expected = { name: 'test name 1', breed: 'test breed 1' };

    return cat.create(obj)
      .then(record => {
        Object.keys(obj).forEach(item => {
          expect(record[item]).toEqual(expected[item])
        })
      });
  });

  it('can read() a single cat', () => {
    let obj = { name: 'test name 2', breed: 'test breed 2' };
    let expected = { name: 'test name 2', breed: 'test breed 2' };

    return cat.create(obj)
      .then(record => {
        return cat.read(record._id)
          .then(item => {
            Object.keys(obj).forEach(key => {
              expect(item[key]).toEqual(expected[key])
            })
          })
      });
  });

  it('can update() a cat', () => {
    let obj = { name: 'test name 2', breed: 'test breed 2' };
    let updatedObj = { name: 'updated test name', breed: 'updated test breed' }
    let expected = { name: 'updated test name', breed: 'updated test breed' };

    return cat.create(obj)
      .then(record => {
        return cat.update(record._id, updatedObj)
          .then(item => {
            Object.keys(obj).forEach(key => {
              expect(item[key]).toEqual(expected[key])
            })
          })
      });
  });

  // it('can delete() a cat', () => {
  //   let obj = { name: 'test name 3', breed: 'test breed 3' };

  //   return cat.create(obj)
  //     .then(record => {
  //       return cat.delete(record._id)
  //         .then(item => {
  //           expect(item).toBeNull();
  //         })
  //     })
  // });

});