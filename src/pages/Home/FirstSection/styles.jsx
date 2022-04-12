import styled from "styled-components";
import backgroundImg from "../../../assets/FirstPanel.png"

const Container = styled.section`
    display: flex;
    justify-content: space-between;
    height: 600px;
    background-image: url(${backgroundImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    .left {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 60%;
        align-items: center;
    }
    .right {
        width: 50%;
        display: flex;
        justify-content: flex-end;
    }
    .img-container {
        height: 496px;
        width: 374px;
    }
    @media(max-width: 900px){
        flex-direction: column;
        height: auto;
        padding-top: 96px;
        padding-bottom: 20px;
        .left{
            width: 90%;
            gap: 50px;
        }
        .stores-container{
            display: none;
        }
    }
`

export { Container }