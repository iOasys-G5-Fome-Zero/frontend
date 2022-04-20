import styled from "styled-components"

const Container = styled.section`
    display: flex;
    flex-direction: column;
    margin: 40px 0px;
    gap: 32px;
    h5 {
        margin-top: 10px;
    }
    .images {
        display: flex;
        width: 100%;
        padding: 10px;
        gap: 20px;
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
    @media (max-width: 920px) {
        margin: 0;
        padding: 10vw;
        .images {
            width: auto;
            padding: 10px;

            overflow-x: scroll;
            .image-and-description {
                flex-shrink: 0;
                min-width: 100%;
            }
        }
        
        .indicators-container {
            display: flex;
            align-self: center;
            margin-top: 0px;
            gap: 10px;
        }
    }
`

export { Container }