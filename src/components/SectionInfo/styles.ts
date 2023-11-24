import styled from "styled-components";

export const Section = styled.div`
  background-color: #ccc;
  padding-top: 32px;
  margin-bottom: 32px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > .card {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
  }
`;
