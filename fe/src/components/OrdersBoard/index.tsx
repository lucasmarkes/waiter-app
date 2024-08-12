import { Order } from "../../types/Order";
import { Board, OrdersContainer } from "./styles";

interface IOrdersBoardProps {
  icon: string;
  title: string;
  orders: Order[];
}

export function OrdersBoard({ icon, title, orders }: IOrdersBoardProps) {
  return (
    <Board>
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      <OrdersContainer>
        {orders.length > 0 &&
          orders.map((order) => (
            <button key={order._id} type="button">
              <strong>Mesa {order.table}</strong>
              <span>{order.products.length} itens</span>
            </button>
          ))}
      </OrdersContainer>
    </Board>
  );
}
