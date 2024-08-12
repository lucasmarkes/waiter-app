export interface Order {
  _id: string;
  table: number;
  status: string;
  products: {
    _id: string;
    quantity: number;
    product: {
      name: string;
      imagePath: string;
      price: number;
    }
  }[]
}
