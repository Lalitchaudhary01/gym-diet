import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  dietPlanId: { type: mongoose.Schema.Types.ObjectId, ref: "DietPlan" },
  title: { type: String, required: true },
  ingredients: [{ type: String }],
  instructions: { type: String },
  calories: { type: Number },
  nutrition: {
    protein: { type: Number },
    carbs: { type: Number },
    fats: { type: Number },
  },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Recipe", recipeSchema);
