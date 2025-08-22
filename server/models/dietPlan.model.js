import mongoose from "mongoose";

const dietPlanSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  goal: { type: String, required: true },
  ingredients: [{ type: String }], // user input ingredients
  plan: { type: String }, // AI generated diet summary
  recipes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipe" }], // linked recipes
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("DietPlan", dietPlanSchema);
