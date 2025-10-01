import express from 'express'
import { addToCart,removeFromCart,getCart } from '../controllers/cartController.js'
import authMiddlwear from '../middleware/auth.js';

const cartRouter = express.Router();

cartRouter.post("/add",authMiddlwear,addToCart)
cartRouter.post("/remove",authMiddlwear,removeFromCart)
cartRouter.post("/get",authMiddlwear,getCart)

export default cartRouter;
