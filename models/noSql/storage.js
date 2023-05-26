const mongoose = require("mongoose");

const StorageSchema = new mongoose.Schema(
  {
    url: {
      type: String,
    },
    filename:{
        type:Number
    }
  },
  {
    timestamps: true, //Todo createAt, updateAt
    versionKey: false,
  }
);

const StorageModel = mongoose.model("storage", StorageSchema);
module.exports = { StorageModel };
