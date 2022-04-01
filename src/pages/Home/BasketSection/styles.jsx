import styled from "styled-components";

const Container = styled.section`
    margin-top: 40px;
    display: flex;
    gap: 70px;
    min-height: 510px;
    .left-panel {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        .img-container {
            position: relative;
            top: 100px;
            height: 410px;
            width: 353px;
            background-color: lightgray;
        }
    }
    .right-panel {
        display: flex;
        flex-direction: column;
        h1 {
            height: 100px;
            font-size: 40px;
            text-justify: center;
        }
        .description{
            font-size: 22px;
            line-height: 150%;
        }
        .products-container{
            display: grid;
            margin-top: 40px;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
        }
    }
`

export { Container }