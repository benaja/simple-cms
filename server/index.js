const { GraphQLServer } = require('graphql-yoga')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/UserApp')

const User = mongoose.model('User', {
  fullname: String,
  username: String,
  phone_number: String,
  city: String
})
