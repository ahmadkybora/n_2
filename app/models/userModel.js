const { mongoose } = require("@utils/general");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 3,
    max: 25,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    max: 50,
  },
  password: {
    type: String,
    required: true,
    min: 8, 
  },
  avatar: {
    type: String,
    default: ""
  }
});

module.exports = mongoose.model("Users", userSchema);
