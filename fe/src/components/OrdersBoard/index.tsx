import { useState } from "react";
import { Order } from "../../types/Order";
import { OrderModal } from "../OrderModal";
import { Board, OrdersContainer } from "./styles";

interface IOrdersBoardProps {
  icon: string;
  title: string;
  orders: Order[];
}

export function OrdersBoard({ icon, title, orders }: IOrdersBoardProps) {
  const [openOrder, setOpenOrder] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  function handleOpenOrder(order: Order) {
    setOpenOrder(true);
    setSelectedOrder(order);
  }

  function handleCloseModal() {
    setOpenOrder(false);
    setSelectedOrder(null);
  }

  return (
    <Board>
      <OrderModal
        open={openOrder}
        order={selectedOrder}
        onClose={handleCloseModal}
      />

      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      <OrdersContainer>
        {orders.length > 0 &&
          orders.map((order) => (
            <button
              key={order._id}
              type="button"
              onClick={() => handleOpenOrder(order)}
            >
              <strong>Mesa {order.table}</strong>
              <span>{order.products.length} itens</span>
            </button>
          ))}
      </OrdersContainer>
    </Board>
  );
}
