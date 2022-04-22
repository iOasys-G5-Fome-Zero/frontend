import styled from "styled-components";

const Container = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary.dark};
  display: flex;
  justify-content: space-between;
  padding: 68px 128px;
  color: white;
  nav {
    display: flex;
  }
  span {
    font-size: 18px;
    font-weight: 500;
    padding: 10px;
  }
  .appstores {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: 900px) {
    padding: 30px;
    justify-content: space-between;
    nav {
      flex-direction: column;
    }
  }
`;

export { Container };
