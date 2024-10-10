import foodModel from "../models/foodModel.js";
import fs from "fs";

// Add food items
const addFood = async (req, res) => {
    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
         image: image_filename
    });

    try {
        await food.save(); // Save the food item to the database
        res.json({ success: true, message: "Food Added" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Food Not Added" });
    }
};

// all food list
const listFood = async (req, res) => {
    try{
        const foods = await foodModel.find({});
        res.json({ success: true, food_list: foods });
    }
    catch(error){
        console.log(error);
        res.json({ success: false, message: "Food Not Found" });
    }
}

//remove food item
const removeFood = async (req, res) => {
    try {
          const food = await foodModel.findById(req.body.id);
          fs.unlink(`uploads/${food.image}`,()=>{} )

          await foodModel.findByIdAndDelete(req.body.id);
          res.json({ success: true, message: "Food Deleted" });
    }
    catch (error) {
        console.log(error);
        res.json({ success: false, message: "Food Not Deleted" });
    }
}
export { addFood , listFood, removeFood};
