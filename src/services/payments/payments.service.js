// Initializes the `Payments` service on path `/payments`
const { Payments } = require('./payments.class');
const hooks = require('./payments.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/payments', new Payments(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('payments');

  service.hooks(hooks);
};
