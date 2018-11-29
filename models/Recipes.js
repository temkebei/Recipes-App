const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var RecipesSchema = new Schema({
  title: String,
  body: String,
  from: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  to: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ],
});
const Recipes = mongoose.model("Recipes", RecipesSchema);

module.exports = Recipes;