const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const idPlugin = require('mongoose-id');

const landpadSchema = new mongoose.Schema({
  name: {
    type: String,
    default: null,
  },
  full_name: {
    type: String,
    default: null,
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'unknown', 'retired', 'lost', 'under construction'],
    required: true,
  },
  type: {
    type: String,
    default: null,
  },
  locality: {
    type: String,
    default: null,
  },
  region: {
    type: String,
    default: null,
  },
  latitude: {
    type: Number,
    default: null,
  },
  longitude: {
    type: Number,
    default: null,
  },
  landing_attempts: {
    type: Number,
    default: 0,
  },
  landing_successes: {
    type: Number,
    default: 0,
  },
  wikipedia: {
    type: String,
    default: null,
  },
  details: {
    type: String,
    default: null,
  },
  launches: [{
    type: mongoose.ObjectId,
    ref: 'Launch',
  }],
  images: {
    small: [String],
    large: [String],
  },
}, { autoCreate: true });

landpadSchema.plugin(mongoosePaginate);
landpadSchema.plugin(idPlugin);

const Landpad = mongoose.model('Landpad', landpadSchema);

module.exports = Landpad;
