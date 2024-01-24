const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' })
}
const allUser = async (req, res) => {
  const users = await User.find({})


  res.status(200).json(users)
}


const loginUser = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.login(email, password)



    const token = createToken(user._id)

    res.status(200).json({ email, token })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}


const signupUser = async (req, res) => {
  const { full_name, phone, email, password, role } = req.body

  try {
    const user = await User.signup(full_name, phone, email, password, role)

    const token = createToken(user._id)

    res.status(200).json({ email, role, token })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = { signupUser, loginUser, allUser }