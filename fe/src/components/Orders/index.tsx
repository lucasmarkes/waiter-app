import { Order } from "../../types/Order";
import { OrdersBoard } from "../OrdersBoard";
import { Container } from "./styles";

const orders: Order[] = [
  {
    _id: "1",
    table: 2,
    status: "pending",
    products: [
      {
        _id: "1",
        quantity: 1,
        product: {
          name: "Café americano",
          imagePath: "/images/coffee.png",
          price: 5.0,
        },
      },
      {
        _id: "2",
        quantity: 1,
        product: {
          name: "Pão na chapa",
          imagePath: "/images/toast.png",
          price: 3.5,
        },
      },
    ],
  },
  {
    _id: "2",
    table: 1,
    status: "ready",
    products: [
      {
        _id: "3",
        quantity: 1,
        product: {
          name: "Misto quente",
          imagePath: "/images/toast.png",
          price: 7.0,
        },
      },
    ],
  },
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard icon="🕑" title="File de Espera" orders={orders} />
      <OrdersBoard icon="🔥" title="Em preparação" orders={[]} />
      <OrdersBoard icon="✅" title="Pronto!" orders={orders} />
    </Container>
  );
}
