import styled from "styled-components";

const Carousel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .carousel {
    display: flex;
    padding: 10px;
    gap: 20px;
    position: relative;
    width: 95vw;
    max-width: 95vw;
    padding: 10px;
    overflow-x: scroll;
    margin: 20px 0;
    > * {
      flex-shrink: 0;
      width: 70%;
      min-width: 70%;
      margin-left: 15%;
      :last-child {
        margin-right: 15%;
      }
    }
  }
  .indicators {
    display: flex;
    gap: 10px;
  }
  @media (max-width: 500px) {
    .carousel > * {
      width: 100%;
      min-width: 100%;
      margin: 0;
      :last-child {
        margin: 0;
      }
    }
  }
`;

export { Carousel };
