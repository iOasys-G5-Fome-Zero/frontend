import styled from "styled-components";

const Container = styled.section`
    display: flex;
    align-items: center;
    gap: 100px;
    padding-top: 50px;
    padding-bottom: 50px;
    h1{
        font-size: 45px;
    }
    p{
        font-size: 23px;
    }
    .right{
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
    .left{
        display: flex;
        flex-direction: column;
        gap: 30px;
        width: 40%;
        .img-container{
            width: 100%;
            img{
                width: 100%;
            }
        }
    }
    @media(max-width: 900px){
        flex-direction: column;
        .left, .right{
            width: 100%;
        }
    }
`

export { Container }