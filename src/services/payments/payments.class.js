const { Service } = require("feathers-mongodb");

exports.Payments = class Payments extends Service {
  constructor(options, app) {
    super(options);

    app.get("mongoClient").then((db) => {
      this.Model = db.collection("payments");
    });
  }

  async create(data) {
    const { cardNumber, expDate, cvv, amount } = data;

    const newData = await super.create({
      cardNumber,
      expDate,
      cvv,
      amount,
    });

    return {
      requestId: newData._id,
      amount: newData.amount,
    };
  }
};
