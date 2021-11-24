const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TeamContentSchema = new Schema({
  src: { type: String, required: true, maxLength: 100 },
  name: { type: String, required: true, maxLength: 100 },
  role: { type: String, required: true, maxLength: 100 },
  intro: { type: String, required: true, maxLength: 100 },
  link1: { type: String, required: true, maxLength: 100 },
  github: { type: String, required: true, maxLength: 100 },
  link2: { type: String, required: true, maxLength: 100 },
});

const TeamContent = mongoose.model("TeamContent", TeamContentSchema);
module.exports = TeamContent;
