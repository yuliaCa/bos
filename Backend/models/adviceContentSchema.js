const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdviceContentSchema = new Schema({
  _01d: { type: String, required: true, maxLength: 500 },
  _02d: { type: String, required: true, maxLength: 500 },
  _03d: { type: String, required: true, maxLength: 500 },
  _04d: { type: String, required: true, maxLength: 500 },
  _09d: { type: String, required: true, maxLength: 500 },
  _10d: { type: String, required: true, maxLength: 500 },
  _11d: { type: String, required: true, maxLength: 500 },
  _01n: { type: String, required: true, maxLength: 500 },
  _02n: { type: String, required: true, maxLength: 500 },
  _03n: { type: String, required: true, maxLength: 500 },
  _04n: { type: String, required: true, maxLength: 500 },
  _09n: { type: String, required: true, maxLength: 500 },
  _10n: { type: String, required: true, maxLength: 500 },
  _11n: { type: String, required: true, maxLength: 500 },
  _13d: { type: String, required: true, maxLength: 500 },
  _13n: { type: String, required: true, maxLength: 500 },
  _50d: { type: String, required: true, maxLength: 500 },
  _50n: { type: String, required: true, maxLength: 500 },
});

const AdviceContent = mongoose.model("AdviceContent", AdviceContentSchema);

module.exports = AdviceContent;
