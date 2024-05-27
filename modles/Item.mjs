import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  title: { type: "string", required: true, minlength: 3 },
  description: { type: "string", required: true },
});

const Items = mongoose.model("Items", itemSchema);

export default Items;
