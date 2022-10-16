const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({

    uid:{
        type:String,
        required:true
    },
  sharedkey: {
    type: String,
    required: true,
  }

});

module.exports = mongoose.model("User", UserSchema);
