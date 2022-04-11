import styled from "styled-components";

const Container = styled.section`
    display: flex;
    justify-content: space-between;
    height: 600px;
    background-image: url(${({ bkgSrc }) => bkgSrc});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
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
        padding-top: 96px;
        padding-bottom: 20px;
        .left{
            width: 90%;
            gap: 50px;
        }
        h1{
            font-size: 38px;
        }
        h5{
            font-size: 21px;
        }
        .stores-container{
            display: none;
        }
    }
`

export { Container }