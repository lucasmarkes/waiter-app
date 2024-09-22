import { Router } from "express";
import multer from "multer";
import path from "node:path";
import { createCategory } from "./app/useCases/categories/createCategories";
import { deleteCategory } from "./app/useCases/categories/deleteCategories";
import { listCategories } from "./app/useCases/categories/listCategories";
import { listProductsByCategories } from "./app/useCases/categories/listProductsByCategories";
import { changeOrderStatus } from "./app/useCases/orders/changeOrderStatus";
import { createOrder } from "./app/useCases/orders/createOrder";
import { deleteOrder } from "./app/useCases/orders/deleteOrder";
import { listOrders } from "./app/useCases/orders/listOrders";
import { createProduct } from "./app/useCases/products/createProduct";
import { deleteProduct } from "./app/useCases/products/deleteProduct";
import { listProducts } from "./app/useCases/products/listProducts";

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, "..", "uploads"));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

// List categories
router.get("/categories", listCategories);

// Create category
router.post("/categories", createCategory);

// Delete category
router.delete("/categories/:categoryId", deleteCategory);

// List products
router.get("/products", listProducts);

// Create product
router.post("/products", upload.single("image"), createProduct);

// Delete product
router.delete("/products/:productId", deleteProduct);

// Get product by category
router.get("/categories/:categoryId/products", listProductsByCategories);

// List orders
router.get("/orders", listOrders);

// Create order
router.post("/orders", createOrder);

// Change order status
router.patch("/orders/:orderId/status", changeOrderStatus);

// Delete order
router.delete("/orders/:orderId", deleteOrder);
