import styled from "styled-components";

const RadioContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 8px;
  input {
    appearance: none;
    background-color: #fff;
    margin: 0;
    font: inherit;
    color: currentColor;
    width: 24px;
    height: 24px;
    border: 1px solid black;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    &:checked {
      border-color: ${({ theme }) => theme.colors.primary.medium};
    }
    &::before {
      display: block;
      content: " ";
      width: 16px;
      height: 16px;
      background-color: ${({ theme }) => theme.colors.primary.medium};
      border-radius: 50%;
      transform: scale(0);
      transition: 120ms transform ease-in-out;
      box-shadow: inset 1em 1em var(--form-control-color);
    }
    &:checked::before {
      transform: scale(1);
    }
  }
`;

const Message = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-radius: 4px;
  padding: 60px 140px;
  width: 724px;
  max-width: 95vw;
  @media (max-width: 700px) {
    padding: 40px;
    h3 {
      font-size: 38px;
    }
    h6 {
      font-size: 21px;
    }
  }
  h3 {
    text-align: center;
    color: ${({ theme }) => theme.colors.primary.dark};
  }
`;

export { RadioContainer, Message };
