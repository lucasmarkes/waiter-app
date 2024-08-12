import styled from "styled-components";

export const Container = styled.header`
  background: #d73035;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 198px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1216px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .page-details {
    h1 {
      font-size: 32px;
      color: #fff;
    }

    h2 {
      font-size: 16px;
      font-weight: 400;
      color: #fff;
      opacity: 0.9;
      margin-top: 6px;
    }
  }
`;
