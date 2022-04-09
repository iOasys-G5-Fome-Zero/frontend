import styled from "styled-components";

const Container = styled.section`
    display: flex;
    flex-direction: column;
    padding: ${({ narrow }) => (narrow ? "0px 18%" : "")};
    margin: 40px 0px;
    align-items: center;
    text-align: center;
    gap: 32px;
    h1 {
        font-size: 39px;
        line-height: 60px;
    }
    .subtitle {
        font-size: 20px;
        line-height: 28px;
    }
    .images {
        @media (max-width: 900px) {
            flex-direction: column;
        }
        display: flex;
        width: 100%;
        padding: 10px;
        gap: 80px;
        .image-and-description {
            flex: 1 1 0px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .img-container {
            width: 100%;
            position: relative;
            height: 0;
            padding-bottom: 75%;
            background-color: lightgray;
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
    }
    .institutions-description {
        line-height: 30px;
        text-align: left;
        padding: 20px;
        font-size: 20px;
        background-color: #c1e9cf;
        flex-grow: 1;
    }
    @media(max-width: 900px){
        padding: 10vw;
    }
`

export { Container }