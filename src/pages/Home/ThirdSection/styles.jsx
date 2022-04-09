import styled from "styled-components";

const Container = styled.section`
    display: flex;
    margin: 40px 0px;
    gap: 30px;
    padding-top: 40px;
    padding-bottom: 80px;
    background-color: #c1e9cf;
    .left {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        gap: 32px;
        h1 {
            line-height: 150%;
        }
        .description {
            line-height: 200%;
        }
    }
    .right {
        width: 50%;
        display: flex;
        justify-content: flex-end;
        .img-container {
            height: 366px;
            width: 441px;
            padding: 50px;
            img {
                width: 100%;
            }
        }
    }
    
    @media(max-width: 900px){
        flex-direction: column;
        .left{
            width: 100%;
        }
        .right{
            width: 100%;
            .img-container{
                height: auto;
                width: 100%;
                padding: 0%;
            }
        }
    }
`

export { Container }