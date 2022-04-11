import styled from "styled-components";

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
        padding: ${({ narrow }) => (narrow ? "0px 120px" : "10px")};
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
    @media (max-width: 900px) {
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
            margin-top: -10px;
            gap: 10px;
            .indicator {
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background-color: #00843F;
            }
            .selected{
                background-color: lime;
                transform: scale(150%);
            }
        }
    }
`

export { Container }