import styled from "styled-components"

const Container = styled.section`
    display: flex;
    flex-direction: column;
    margin: 40px 0px;
    gap: 32px;
    h5 {
        margin-top: 10px;
    }
    .image-and-description {
        display: flex;
        flex-direction: column;
        align-items: center;
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
    .images {
        display: flex;
        width: 100%;
        padding: 0px 120px;
        gap: 20px;
    }
    .images{
        display: none;
    }
    .institutions-description {
        width: 100%;
        line-height: 30px;
        text-align: left;
        padding: 20px;
        font-size: 20px;
        background-color: ${({ theme }) => theme.colors.primary.pale};
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
    /* @media (max-width: 920px) {
        margin: 0;
        padding: 10vw;
        .image-and-description {
            flex-shrink: 0;
            min-width: 70%;
            margin-left: 15%;
        }
        .images {
            position: relative;
            gap: 40px;
            left: -9%;
            width: 95vw;
            padding: 10px;

            overflow-x: scroll;
        }

        .indicators-container {
            display: flex;
            align-self: center;
            margin-top: 0px;
            gap: 10px;
        }
    }
    @media (max-width: 600px) {
        .image-and-description {
            flex-shrink: 0;
            min-width: 100%;
            margin-left: 0;
        }
    } */
`

export { Container }