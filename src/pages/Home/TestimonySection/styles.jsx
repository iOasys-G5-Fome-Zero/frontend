import styled from "styled-components";
import imgBkg from "../../../assets/TestimoniesBkg.png"

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
    padding-bottom: 50px;
    background-image: url(${imgBkg});
    background-size: cover;
    background-position: center;
    .desktop {
        width: 100%;
        max-width: 100%;
        display: flex;
        gap: 30px;
    }
    .quotes {
        margin-top: 150px;
        img {
            width: 100px;
        }
    }
    .left-testimonies {
        flex-grow: 1;
    }
    .right-testimonies {
        flex-grow: 1;
    }

    .mobile {
        display: none;
    }

    @media (max-width: 920px) {
        flex-direction: column;
        .mobile {
            width: 100%;
            display: flex;
            flex-direction: column;
        }
        .testimonies-carousel {
            margin: 20px auto;
            padding: 10px;
            gap: 10px;
            width: 95vw;
            position: relative;
            left: -12%;
            display: flex;
            overflow: scroll;
            > * {
                min-width: 70%;
                margin-left: 15%;
            }
        }

        .desktop {
            display: none;
        }
        .quotes {
            display: none;
        }
        h2 {
            text-align: center;
        }
        .right-testimonies {
            margin-top: -20px;
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