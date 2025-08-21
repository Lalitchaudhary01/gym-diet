import mongoose from "mongoose";

const shoppingListSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  dietPlanId: { type: mongoose.Schema.Types.ObjectId, ref: "DietPlan" },
  items: [
    {
      name: { type: String, required: true },
      quantity: { type: String }, // e.g. "2 kg", "500 ml"
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("ShoppingList", shoppingListSchema);
