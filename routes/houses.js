const express = require('express')
const {

  getHouses,
  getHouse,
  createHouse,
  deleteHouse,
  updateHouse
} = require('../controllers/houseController')

const router = express.Router()


router.get('/', getHouses)


router.get('/:id', getHouse)


router.post('/', createHouse)


router.delete('/:id', deleteHouse)


router.patch('/:id', updateHouse)


module.exports = router