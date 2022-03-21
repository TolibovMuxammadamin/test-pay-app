const assert = require('assert');
const app = require('../../src/app');

describe('\'Payments\' service', () => {
  it('registered the service', () => {
    const service = app.service('payments');

    assert.ok(service, 'Registered the service');
  });
});
