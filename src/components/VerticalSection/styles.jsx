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
    .images{
        display: flex;
        width: 100%;
        padding: 10px;
        gap: 20px;
        .image-and-description{
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
        }
        .img-container{
            width: 100%;
            position: relative;
            height: 0;
            padding-bottom: 75%;
            background-color: lightgray;
        }
        .img-description{
            line-height: 30px;
        }
    }

`

export { Container }