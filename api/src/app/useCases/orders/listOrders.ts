import { Request, Response } from "express";
import { Order } from "./../../models/Order";

export async function listOrders(req: Request, res: Response) {
  try {
    const orders = await Order.find()
      .sort({ createdAt: "desc" })
      .populate("products.product");
    return res.json(orders);
  } catch (error) {
    return res.sendStatus(500);
  }
}
