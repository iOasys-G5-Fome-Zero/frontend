import styled from "styled-components";

const Container = styled.div`
    position: relative;
    width: 400px;
    input {
        width: 100%;
        margin-bottom: 30px;
        padding: 16px 10px;
        outline-color: #00843F;
        font-size: 16px;
    }
    label {
        position: absolute;
        left: ${({labelUp}) => labelUp ? "0px" : "10px"};
        top: ${({labelUp}) => labelUp ? "-20px" : "16px"};
        font-size: ${({labelUp}) => labelUp ? "12px" : "initial"};
        color: ${({labelUp}) => labelUp ? "#00843F" : "gray"};
    }
`

export { Container }