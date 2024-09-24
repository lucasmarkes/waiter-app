import { useState } from "react";
import { toast } from "react-toastify";
import { Order } from "../../types/Order";
import { OrderModal } from "../OrderModal";
import { api } from "../utils/api";
import { Board, OrdersContainer } from "./styles";

interface IOrdersBoardProps {
  icon: string;
  title: string;
  orders: Order[];
  onCancelOrder: (order: Order) => void;
  handleUpdateOrderStatus: (orderId: string, status: Order["status"]) => void;
}

export function OrdersBoard({
  icon,
  title,
  orders,
  onCancelOrder,
  handleUpdateOrderStatus,
}: IOrdersBoardProps) {
  const [openOrder, setOpenOrder] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleOpenOrder(order: Order) {
    setOpenOrder(true);
    setSelectedOrder(order);
  }

  function handleCloseModal() {
    setOpenOrder(false);
    setSelectedOrder(null);
  }

  async function handleCancelOrder() {
    if (!selectedOrder) return;

    setIsLoading(true);

    await api.delete(`/orders/${selectedOrder._id}`);

    toast.success(
      `O Pedido da mesa ${selectedOrder.table} foi cancelado com sucesso!`
    );
    setIsLoading(false);
    setOpenOrder(false);
    onCancelOrder(selectedOrder);
  }

  async function handleChangeOrderStatus() {
    setIsLoading(true);

    const status =
      selectedOrder?.status === "WAITING" ? "IN_PRODUCTION" : "DONE";

    await api.patch(`/orders/${selectedOrder?._id}/status`, { status });

    toast.success(
      `O Pedido da mesa ${selectedOrder?.table} foi atualizado com sucesso!`
    );
    handleUpdateOrderStatus(selectedOrder!._id, status);
    setIsLoading(false);
    setOpenOrder(false);
  }

  return (
    <Board>
      <OrderModal
        open={openOrder}
        order={selectedOrder}
        onClose={handleCloseModal}
        onCancelOrder={handleCancelOrder}
        isLoading={isLoading}
        handleChangeOrderStatus={handleChangeOrderStatus}
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
