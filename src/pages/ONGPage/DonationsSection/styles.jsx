import styled from "styled-components";

const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 40px;
    .regular-text{
        font-size: 24px;
    }
    .bottom-p{
        padding: 0px 40px;
        margin-bottom: 96px;
    }
    .donations {
        padding: 33px;
        padding-bottom: 0;
        display: flex;
        gap: 20px;
    }
    .img-container {
        width: 333px;
        img {
            width: 100%;
            border-radius: 4px;
        }
    }
    .bar {
        position: relative;
        overflow: hidden;
        width: 530px;
        height: 29px;
        border-radius: 9999px;
        background-color: #ffd1be;
        &::after {
            content: "";
            position: absolute;
            background-color: #ff8047;
            height: 100%;
            width: ${({ barFill }) => barFill}%;
        }
    }
    .donations-data{
        display: flex;
        flex-direction: column;
        padding: 32px;
        gap: 32px;
        .ong-data{
            font-size: 32px;
        }
    }
`

export { Container }