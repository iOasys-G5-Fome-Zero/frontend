import styled from "styled-components";

const Container = styled.section`
  display: flex;
  gap: 85px;
  padding-top: 80px;
  padding-bottom: 80px;
  background-color: ${({ theme }) => theme.colors.primary.pale};
  .left {
    width: 52%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 32px;
  }
  .right {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-top: 110px;
    gap: 24px;
    .img-container {
      height: 366px;
      width: 441px;
      img {
        width: 100%;
      }
    }
  }

  @media (max-width: 920px) {
    flex-direction: column;
    gap: 0px;
    .left {
      width: 100%;
    }
    .right {
      width: 100%;
      .img-container {
        height: auto;
        width: 100%;
        padding: 0%;
      }
    }
  }
`;

export { Container };
