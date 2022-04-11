import styled from "styled-components";

const Container = styled.section`
    display: flex;
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
        h3{
            font-size: 24px;
        }
        h5{
            font-size: 16px;
            line-height: 120%;
        }
    }
`

export { Container }