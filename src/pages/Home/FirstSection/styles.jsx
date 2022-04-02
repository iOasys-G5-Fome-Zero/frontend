import styled from "styled-components";

const Container = styled.section`
    display: flex;
    justify-content: space-between;
    height: 600px;
    padding: 10px;
    h1 {
        line-height: 80px;
        font-size: 55px;
    }
    h4 {
        font-size: 30px;
        line-height: 40px;
    }
    .left {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 50%;
        align-items: center;
    }
    .right{
        width: 50%;
        display: flex;
        justify-content: flex-end;
    }
    .img-container{
        height: 496px;
        width: 374px;
        background-color: lightgray;
    }
`

export { Container }