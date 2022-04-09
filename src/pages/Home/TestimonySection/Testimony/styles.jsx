import styled from "styled-components";

const Container = styled.div`
    max-width: 384px;
    display: flex;
    margin: 70px 0px;
    padding: 15px;
    box-shadow: 0px 4px 8px -2px rgba(17, 24, 39, 0.1), 0px 2px 4px -2px rgba(17, 24, 39, 0.06);
    align-self: ${({ right }) => right ? "flex-start" : "flex-end"};
    margin-left: auto;
    border-radius: 8px;
    .testimony{
        justify-content: flex-end;
        display: flex;
    }
    .text{
        padding: 15px 10px;
        width: 90%;
        display: flex;
        flex-direction: column;
    }
    .small-quotes{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 10px;
        img{
            width: 20px;
        }
    }
    h4{
        margin-top: 20px;
    }
    span{
        color: lightgray;
    }
`

export { Container }