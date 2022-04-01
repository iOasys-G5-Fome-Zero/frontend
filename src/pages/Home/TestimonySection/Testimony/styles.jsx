import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    margin: 30px 0px;
    .testimony{
        justify-content: flex-end;
        display: flex
    }
    .text{
        padding: 15px 10px;
        width: 70%;
        display: flex;
        flex-direction: column;
    }
    .small-quotes{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 10px;
        img{
            width: 20px;
        }
    }
    h4{
        margin-top: 20px;
    }
    span{
        color: lightgray;
    }
`

export { Container }