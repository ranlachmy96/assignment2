const MongoStorage = require('../data/MongoStorage');

let storage = null;

if (process.env.DB_HOST && process.env.DB_USER && process.env.DB_PASS) {
  storage = new MongoStorage('familyReunification');
} else {
  console.log('problemmmmmmmmmmm');
}

const familyReunificationRepository = {
  find: () => (storage ? storage.find() : null),
  findById: (id) => (storage ? storage.findById(id) : null),
  create: (reunificationCase) => (storage ? storage.create(reunificationCase) : null),
  update: (id, reunificationCase) => (storage ? storage.update(id, reunificationCase) : null),
  delete: (id) => (storage ? storage.delete(id) : null),
};

module.exports = { familyReunificationRepository };
