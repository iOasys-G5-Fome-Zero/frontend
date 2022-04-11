import styled from "styled-components";

const Container = styled.section`
    display: flex;
    align-items: center;
    gap: 100px;
    padding-top: 50px;
    padding-bottom: 50px;
    .right{
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
    .left{
        display: flex;
        flex-direction: column;
        padding-top: 100px;
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
        flex-direction: column-reverse;
        gap: 0px;
        .left, .right{
            width: 100%;
        }
    }
`

export { Container }