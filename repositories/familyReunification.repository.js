const MongoStorage = require('../data/MongoStorage');

module.exports = class familyReunificationRepository {
  constructor() {
    if (process.env.DB_HOST && process.env.DB_USER && process.env.DB_PASS) {
      this.storage = new MongoStorage('familyReunification');
    } else { console.log('problemmmmmmmmmmm'); }
  }

  find() {
    return this.storage.find();
  }

  findById(id) {
    return this.storage.findById(id);
  }

  create(reunificationCase) {
    return this.storage.create(reunificationCase);
  }

  update(id, reunificationCase) {
    return this.storage.create(id, reunificationCase);
  }

  delete(id) {
    return this.storage.delete(id);
  }
};
