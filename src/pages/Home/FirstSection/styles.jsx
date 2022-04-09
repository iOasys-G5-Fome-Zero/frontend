import styled from "styled-components";

const Container = styled.section`
    display: flex;
    justify-content: space-between;
    height: 600px;
    background-image: url(${({ bkgSrc }) => bkgSrc});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

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
    .right {
        width: 50%;
        display: flex;
        justify-content: flex-end;
    }
    .img-container {
        height: 496px;
        width: 374px;
        background-color: lightgray;
    }
    @media(max-width: 900px){
        flex-direction: column;
        height: auto;
        .left{
            width: auto;
            gap: 50px;
        }
    }
`

export { Container }