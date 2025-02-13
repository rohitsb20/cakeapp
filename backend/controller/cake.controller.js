import Cake from "../model/cake.model.js";
import fs from "fs";

export const addCake = async (req, res) => {
  try {
    const { name, price, category, description } = req.body;
    
 
    

    
    if (!name || !price || !category || !description || !req.file) {
      return res.status(400).json({
        error: "All fields are required  ",
      });
    }

    if (description.length < 10) {
      return res
        .status(400)
        .json({ error: "Description should be atleast 10 characters long" });
    }

    const image_name = `${req.file.filename}`;

    const newCake = new Cake({
      name,
      price,
      category,
      description,
      image: image_name,
    });

    if (newCake) {
      await newCake.save();
      res.status(201).json({
        message: "Food added successfully",
        _id: newCake._id,
        name: newCake.name,
        price: newCake.price,
        category: newCake.category,
        description: newCake.description,
        image: newCake.image,
      });
    }
  } catch (error) {
    console.log("newCake controller error", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getCakes = async (req, res) => {
  try {
    const cakes = await Cake.find({});
    res.status(200).json(cakes);
  } catch (error) {
    console.log("getCakes controller error", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteCake = async (req, res) => {
  try {
    const { id } = req.body;
    console.log(id);
    const cake = await Cake.findById(id);

    if (!cake) {
      return res.status(404).json({ error: "Cake not found" });
    }
    fs.unlink(`uploads/${cake.image}`, () => {});
    await Cake.findByIdAndDelete(req.body.id);

    res.status(200).json({ message: "Cake deleted successfully" });
  } catch (error) {
    console.log("deleteCake controller error", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
