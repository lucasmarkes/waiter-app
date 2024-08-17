import styled from "styled-components";

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  background: #fff;
  border-radius: 8px;
  max-width: 600px;
  padding: 32px;
  width: 480px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 24px;
    }

    button {
      border: 0;
      background: transparent;
      line-height: 0;
    }
  }
`;

export const StatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;

  small {
    opacity: 0.8;
    font-size: 14px;
  }

  div {
    margin-top: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const OrderDetails = styled.div`
  margin-top: 16px;

  > strong {
    font-weight: 500;
    font-size: 14px;
    opacity: 0.8;
  }

  .orderItems {
    margin-top: 8px;
  }

  .item {
    display: flex;

    & + .item {
      margin-top: 16px;
    }

    img {
      border-radius: 4px;
    }
  }

  .quantity {
    font-size: 14px;
    color: #666;
    display: block;
    min-width: 20px;
    margin-left: 12px;
  }

  .productDetails {
    margin-left: 4px;

    strong {
      margin-bottom: 4px;
      display: block;
    }

    span {
      font-size: 14px;
      color: #666;
    }
  }

  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;

    span {
      font-size: 14px;
      font-weight: 500;
      opacity: 0.8;
    }
  }
`;

export const Actions = styled.footer`
  margin-top: 32px;
  display: flex;
  flex-direction: column;


  .primary {
    background: #333;
    border-radius: 48px;
    border: 0;
    color: white;
    padding: 12px 24px;
    gap: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .secondary {
    margin-top: 16px;
    background: transparent;
    border: 0;
    color: #D73035;
    padding: 12px 24px;
    margin-top: 8px;
    font-weight: bold;
  }
`;
