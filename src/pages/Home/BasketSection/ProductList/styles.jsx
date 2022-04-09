import styled from "styled-components";

const Container = styled.div`
    display: flex;
    gap: 8px;
    .left {
        display: flex;
        justify-content: flex-start;    
        width: 50%;
        .pic-container {
            width: 80%;
            height: 0;
            padding-bottom: 80%;
            background-color: #00843F;
            border-radius: 4px;
        }
    }
    li{
        font-size: 12px;
        margin: 10px 0px;
    }
    
`

export { Container }