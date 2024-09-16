import express from "express";
import { create, deleteProduct, getAll, getOne, update } from "../controller/ProductController.js";
const route = express.Router();

route.post("/create", create);
route.get("/getAll",getAll);
route.get("/getOne/:id",getOne);
route.put("/update/:id",update)
route.delete("/deleteProduct/:id",deleteProduct)
export default route;