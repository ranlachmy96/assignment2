const { Schema, model } = require('mongoose');

const familyReunificationSchema = new Schema({
  id: { type: Number },
  parents: { type: Array, items: { type: String } },
  children: { type: Array, items: { type: String } },
  active: { type: Boolean },
  reunion_date: { type: String, format: Date },
  reunion_location: { type: String },
}, { collection: 'reunificationCase' });

module.exports = model('familyReunification', familyReunificationSchema);
