const mongoose = require('mongoose')
require('dotenv').config()

const uniqueValidator = require('mongoose-unique-validator')

const url = process.env.MONGODB_URI

// eslint-disable-next-line
console.log('Connecting to', url)

mongoose
  .connect(url, {})
  .then(() => {
    // eslint-disable-next-line
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    // eslint-disable-next-line
    console.log('error connecting to MongoDB:', error.message)
  })

const personSchema = new mongoose.Schema({
  name: {
    type: String, required: true, unique: true, minLength: 3,
  },
  number: { type: String, required: true, minLength: 8 },
})

personSchema.plugin(uniqueValidator)

personSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    // eslint-disable-next-line
    returnedObject.id = returnedObject._id.toString()
    // eslint-disable-next-line
    delete returnedObject._id
    // eslint-disable-next-line
    delete returnedObject.__v
  },
})

module.exports = mongoose.model('Person', personSchema)
