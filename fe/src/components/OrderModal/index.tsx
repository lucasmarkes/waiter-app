import { useEffect } from "react";
import closeIcon from "../../assets/images/close-icon.svg";
import { Order } from "../../types/Order";
import { formatCurrency } from "../utils/formatCurrency";
import {
  Actions,
  ModalBody,
  OrderDetails,
  Overlay,
  StatusContainer,
} from "./styles";

export function OrderModal({
  open,
  order,
  onClose,
}: {
  open: boolean;
  order: Order | null;
  onClose: () => void;
}) {
  if (!open || !order) {
    return null;
  }

  const totalPrice = order.products.reduce((acc, { product, quantity }) => {
    return acc + product.price * quantity;
  }, 0);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>
          <button type="button" onClick={onClose}>
            <img src={closeIcon} alt="Fechar modal" />
          </button>
        </header>

        <StatusContainer>
          <small>Status do pedido</small>
          <div>
            <span>
              {order.status === "DONE" && "✅"}
              {order.status === "IN_PRODUCTION" && "🔥"}
              {order.status === "WAITING" && "🕑"}
            </span>

            <strong>
              {order.status === "DONE" && "Pronto!"}
              {order.status === "IN_PRODUCTION" && "Em preparação"}
              {order.status === "WAITING" && "Fila de espera"}
            </strong>
          </div>
        </StatusContainer>

        <OrderDetails>
          <strong>Itens</strong>

          <div className="orderItems">
            {order.products.map(({ _id, product, quantity }) => (
              <div className="item" key={_id}>
                <img
                  width={56}
                  height={28.51}
                  src={`http://localhost:3001/uploads/${product.imagePath}`}
                  alt={product.name}
                />

                <span className="quantity">{quantity}x</span>

                <div className="productDetails">
                  <strong>{product.name}</strong>
                  <span>{formatCurrency(product.price)}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="total">
            <span>Total</span>
            <strong>{formatCurrency(totalPrice)}</strong>
          </div>
        </OrderDetails>

        <Actions>
          <button type="button" className="primary">
            <span>👨🏻‍🍳</span>
            <span>Iniciar produção</span>
          </button>
          <button type="button" className="secondary">
            Cancelar Pedido
          </button>
        </Actions>
      </ModalBody>
    </Overlay>
  );
}
