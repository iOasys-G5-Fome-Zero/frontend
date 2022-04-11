import styled from "styled-components";

const Container = styled.div`
    display: flex;
    gap: 8px;
    .left {
        display: flex;
        justify-content: center;
        align-items: center;    
        width: 50%;
        .pic-container {
            width: 60%;
            height: 0;
            padding-bottom: 60%;
            background-color: #00843F;
            border-radius: 4px;
        }
    }
    .product-type{
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 20px;
    }
    li{
        font-size: 16px;
    }
    .expand{
        font-size: 14px;
        font-weight: 600;
        margin-top: 20px;
        color: #00843F;
    }
`

export { Container }