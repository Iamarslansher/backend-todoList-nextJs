import express from "express";
import Items from "../modles/Item.mjs";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const items = await Items.find();

    res.send({ message: "successfully fetch", items });
  } catch (error) {
    console.log(error.message);
  }
});

router.post("/add", async (req, res) => {
  try {
    await Items.create(req.body);
    res.send({ message: "success" });
  } catch (error) {
    res.send(error.message);
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id, "id in edit");
    const result = await Items.findByIdAndUpdate(id, req.body);
    if (!result) {
      return res.send({ message: "not find this product" });
    }
    res.send({ message: "updated" });
  } catch (error) {
    console.log(error.message);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Items.findByIdAndDelete(id);
    if (!result) {
      return res.send({ message: "not find this product" });
    }
    res.send({ message: "deleted" });
  } catch (error) {
    console.log(error.message);
  }
});

export default router;
