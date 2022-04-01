import styled from "styled-components";

const Container = styled.div`
    display: flex;
    gap: 8px;
    .left {
        display: flex;
        justify-content: flex-start;    
        width: 50%;
        .pic-container {
            height: 108px;
            width: 108px;
            background-color: lightgray;
        }
    }
    li{
        font-size: 12px;
        margin: 10px 0px;
    }
`

export { Container }