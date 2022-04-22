import styled from "styled-components";

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.grayscale.white};
  padding: 80px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  h3 {
    color: ${({ theme }) => theme.colors.primary.dark};
  }
  .link {
    color: ${({ theme }) => theme.colors.primary.dark};
    text-decoration: underline;
  }
`;

export { Container };
