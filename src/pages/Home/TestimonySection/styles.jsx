import styled from "styled-components";
import imgBkg from "../../../assets/TestimoniesBkg.png"

const Container = styled.section`
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
            display: flex;
            flex-direction: column;
        }
        .testimonies-carousel {
            padding: 10px;
            gap: 10px;
            width: 100%;
            display: flex;
            overflow: scroll;
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