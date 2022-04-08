import styled from "styled-components";

const Container = styled.div`
    display: flex;
    margin-top: 100px;
    margin-bottom: 100px;
    gap: 20px;
    padding: ${({ ong }) => ong ? "50px 32px" : ""};
    border: ${({ ong }) => ong ? "1px solid #00843F" : ""};
    border-radius: 4px;
    .info {
        width: 400px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        p{
            font-size: 24px;
            line-height: 150%;
        }
    }
    form {
        padding: 0px 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    button{
        width: 200px;
        height: 50px;
        background-color: #00843F;
        border-radius: 4px;
        color: white;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export { Container }