import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: ${({ vertical }) => (vertical ? "column" : "row")};
  gap: 10px;
  padding: 10px;
  img {
    max-height: 38px;
  }

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export { Container };
