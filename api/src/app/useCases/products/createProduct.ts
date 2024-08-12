import { Request, Response } from "express";
import { Product } from "../../models/Product";

export async function createProduct(req: Request, res: Response) {
  try {
    const imagePath = req.file?.filename;
    const { name, description, price, category, ingredients } = req.body;

    const product = await Product.create({
      name,
      description,
      price: Number(price),
      ingredients: ingredients ? JSON.parse(ingredients) : [],
      category,
      imagePath,
    });

    return res.status(201).json(product);
  } catch (error) {
    return res.sendStatus(500);
  }
}
