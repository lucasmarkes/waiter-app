import { Request, Response } from "express";
import { Category } from "../../models/Category";

export async function deleteCategory(req: Request, res: Response) {
  try {
    const { categoryId } = req.params;

    await Category.findByIdAndDelete(categoryId);

    return res.sendStatus(204);
  } catch (error) {
    return res.sendStatus(500);
  }
}
