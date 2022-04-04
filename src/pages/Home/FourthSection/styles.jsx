import styled from "styled-components";

const Container = styled.section`
    display: flex;
    flex-direction: column;
    margin: 40px 0px;
    align-items: center;
    text-align: center;
    gap: 32px;
    h1{
        font-size: 39px;
        line-height: 60px;
    }
    .subtitle{
        font-size: 20px;
        line-height: 28px;
    }
    .topics{
        /* width: 60%; */
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
    .main-content{
        display: flex;
        align-items: center;
    }
    .img-container{
        img{
            position: relative;
            left: 20%;
            width: 485px;
        }
    }
`

export { Container }