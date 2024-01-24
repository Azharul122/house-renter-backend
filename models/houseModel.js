const mongoose = require('mongoose')

const Schema = mongoose.Schema
// name, address, city, bedrooms, bathrooms, room size, picture, availability date, rent per month, phone number, and description
const houseSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  owner_email: {
    type: String,
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  bedrooms: {
    type: Number,
    required: true
  },
  bathrooms: {
    type: Number,
    required: true
  },
  room_size: {
    type: String,
    required: true
  },
  picture: {
    type: String,
    required: true
  },
  availability_date: {
    type: Date,
    required: true
  },
  rent_per_month: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  Description: {
    type: String,
    required: true
  },


}, { timestamps: true })

module.exports = mongoose.model('House', houseSchema)