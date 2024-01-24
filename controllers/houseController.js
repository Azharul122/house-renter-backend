const House = require('../models/houseModel')
const mongoose = require('mongoose')


const getHouses = async (req, res) => {
  const houses = await House.find({}).sort({ createdAt: -1 })

  res.status(200).json(houses)
}


const getHouse = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such house' })
  }

  const house = await House.findById(id)

  if (!house) {
    return res.status(404).json({ error: 'No such house' })
  }

  res.status(200).json(house)
}



const createHouse = async (req, res) => {
  const { name, owner_email, address, city, bedrooms, bathrooms, room_size, picture, availability_date, rent_per_month, phone, Description } = req.body


  try {
    const house = await House.create({ name, owner_email, address, city, bedrooms, bathrooms, room_size, picture, availability_date, rent_per_month, phone, Description })
    res.status(200).json(house)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}


const deleteHouse = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such house' })
  }

  const house = await House.findOneAndDelete({ _id: id })

  if (!house) {
    return res.status(400).json({ error: 'No such house' })
  }

  res.status(200).json(house)
}


const updateHouse = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such House' })
  }

  const house = await House.findOneAndUpdate({ _id: id }, {
    ...req.body
  })

  if (!house) {
    return res.status(400).json({ error: 'No such house' })
  }

  res.status(200).json(house)
}


module.exports = {
  getHouses,
  getHouse,
  createHouse,
  deleteHouse,
  updateHouse
}