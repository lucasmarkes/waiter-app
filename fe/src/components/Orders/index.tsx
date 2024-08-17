import { Order } from "../../types/Order";
import { OrdersBoard } from "../OrdersBoard";
import { Container } from "./styles";

const orders: Order[] = [
  {
    _id: "1",
    table: 2,
    status: "WAITING",
    products: [
      {
        _id: "1",
        quantity: 1,
        product: {
          name: "Burgao da massa",
          imagePath: "burger-molho-especial.png",
          price: 5.0,
        },
      },
      {
        _id: "2",
        quantity: 1,
        product: {
          name: "Burgao da massa",
          imagePath: "burger-molho-especial.png",
          price: 5.0,
        },
      },
    ],
  },
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard icon="🕑" title="Fila de Espera" orders={orders} />
      <OrdersBoard icon="🔥" title="Em preparação" orders={[]} />
      <OrdersBoard icon="✅" title="Pronto!" orders={[]} />
    </Container>
  );
}
