import styled from "styled-components";

const Container = styled.section`
    height: 366px;
    display: flex;
    margin: 40px 0px;
    gap: 30px;
    .left{
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        gap: 32px;
        h1{
            line-height: 150%;
        }
        .description{
            line-height: 200%;
        }
    }
    .right{
        width: 50%;
        display: flex;
        justify-content: flex-end;
        .img-container{
            height: 100%;
            width: 441px;
            background-color: lightgray;
        }
    }
`

export { Container }