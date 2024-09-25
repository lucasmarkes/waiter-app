import { useEffect, useState } from "react";
import socketIo from "socket.io-client";
import { Order } from "../../types/Order";
import { OrdersBoard } from "../OrdersBoard";
import { api } from "../utils/api";
import { Container } from "./styles";

export function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const socket = socketIo("http://localhost:3001", {
      transports: ["websocket"],
    });

    socket.on("orders@new", (orders) => {
      console.log("novo pedido chegou");
      setOrders((prevOrders) => prevOrders.concat(orders));
    });

    return () => {
      socket.off("orders@new");
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    api.get<Order[]>("/orders").then((response) => {
      setOrders(response.data);
    });
  }, []);

  const waiting = orders.filter((order) => order.status === "WAITING");
  const inProduction = orders.filter(
    (order) => order.status === "IN_PRODUCTION"
  );
  const done = orders.filter((order) => order.status === "DONE");

  function handleCancelOrder(order: Order) {
    setOrders((prevOrders) => prevOrders.filter((o) => o._id !== order._id));
  }

  function handleUpdateOrderStatus(orderId: string, status: Order["status"]) {
    setOrders((prevOrders) =>
      prevOrders.map((order) => {
        if (order._id === orderId) {
          return { ...order, status };
        }

        return order;
      })
    );
  }

  return (
    <Container>
      <OrdersBoard
        icon="🕑"
        title="Fila de Espera"
        orders={waiting}
        onCancelOrder={handleCancelOrder}
        handleUpdateOrderStatus={handleUpdateOrderStatus}
      />
      <OrdersBoard
        icon="🔥"
        title="Em preparação"
        orders={inProduction}
        onCancelOrder={handleCancelOrder}
        handleUpdateOrderStatus={handleUpdateOrderStatus}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto!"
        orders={done}
        onCancelOrder={handleCancelOrder}
        handleUpdateOrderStatus={handleUpdateOrderStatus}
      />
    </Container>
  );
}
