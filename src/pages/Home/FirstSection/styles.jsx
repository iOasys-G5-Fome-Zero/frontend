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
        width: 50%;
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
    @media(max-width: 920px){
        flex-direction: column;
        height: auto;
        padding-top: 96px;
        padding-bottom: 20px;
        .left{
            width: 80%;
            gap: 50px;
            h5{
                font-size: 21px;
                line-height: 150%;
            }
        }
        .stores-container{
            display: none;
        }
    }
`

export { Container }