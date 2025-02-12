import express from "express";
import {
  addCake,
  getCakes,
  deleteCake,
} from "../controller/cake.controller.js";
import upload from "../middleware/upload.js";

const router = express.Router();


router.post("/add",upload, addCake);
router.post("/delete", deleteCake);
router.get("/list",getCakes);


export default router;
