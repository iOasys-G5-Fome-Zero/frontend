import styled from "styled-components"

const Container = styled.section`
    display: flex;
    flex-direction: column;
    margin: 40px 0px;
    gap: 32px;
    h5 {
        margin-top: 10px;
    }
    .images{
        display: none;
    }
    .img-container {
        width: 100%;
        position: relative;
        height: 0;
        padding-bottom: 75%;
        overflow: hidden;
        img {
            position: absolute;
            top: 0;
            left: 0;
            object-fit: cover;
            min-height: 100%;
            min-width: 100%;
        }
    }
    .img-description {
        line-height: 30px;
    }
    .image-and-description {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    @media(min-width: 920px){
        .image-and-description{
            flex: 1 1 0px;
        }
        .mobile{
            display: none;
        }
        .images{
            width: 100%;
            display: flex;
            gap: 20px;
        }
    }
`

export { Container }