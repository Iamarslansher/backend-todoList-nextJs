import express from "express";
import item from "./item.mjs";

const router = express.Router();

router.use("/items", item);

export default router;
