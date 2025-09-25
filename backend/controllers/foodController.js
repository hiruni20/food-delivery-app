import FoodModel from "../models/FoodModel.js";
import fs from 'fs'

//add food item

const addFood = async (req,res) => {

    let image_filename = `${req.file.filename}`;

    const food = new FoodModel({
        name:req.body.name,
        description:req.boq.description,
        price:req.body.price,
        category:req.body.category,
    })
}

export {addFood}