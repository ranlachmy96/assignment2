const { EventEmitter } = require('events');
const mongoose = require('mongoose');
const Path = require('path');

module.exports = class MongoStorage extends EventEmitter {
  constructor(entity) {
    super();

    this.entityName = entity.charAt(0).toUpperCase() + entity.slice(1);
    this.Model = require(Path.join(__dirname, `../models/${this.entityName}.model.js`));
    this.connect();
  }

  connect() {
    const connectionUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`;
    mongoose
      .connect(connectionUrl)
    // eslint-disable-next-line no-console
      .then(() => console.log(`connected to ${this.entityName} collection `))
    // eslint-disable-next-line no-console
      .catch((error) => console.log(`connection error: ${error}`));
  }

  find() {
    return this.Model.find({});
  }

  findById(id) {
    return this.Model({ id });
  }

  create(data) {
    const entity = new this.Model(data);
    entity.save();
  }

  update(id, data) {
    return this.Model.updateOne({ id }, data);
  }

  delete(id) {
    return this.Model.deleteOne({ id });
  }
};
