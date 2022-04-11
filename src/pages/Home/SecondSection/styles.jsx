import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 100%;
    .left{
        width: 700px;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .right{
        max-width: 320px;
        margin: auto;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        gap: 80px;
        justify-content: center;
        align-items: center;
    }
    @media(max-width: 700px){
        flex-direction: column-reverse;
        .left{
            width: 100%;
        }
        .right{
            flex-direction: column-reverse;
            text-align: center;
            gap: 20px;
            padding: 30px 0px;
        }
        h3{
            font-size: 28px;
        }
    }
`

export { Container }