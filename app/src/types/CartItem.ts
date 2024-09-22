import { IProduct } from "./Product";

export interface CartItem {
  product: IProduct;
  quantity: number;
}
