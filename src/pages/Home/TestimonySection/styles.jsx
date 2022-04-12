import styled from "styled-components";

const Container = styled.section`
    margin: 50px 0px;
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

    @media (max-width: 900px) {
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