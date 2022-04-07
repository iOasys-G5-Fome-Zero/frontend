import styled from "styled-components";

const Container = styled.div`
    display: flex;
    padding-top: 80px;
    padding-bottom: 80px;
    gap: 20px;
    .info {
        width: 400px;
        display: flex;
        flex-direction: column;
        gap: 40px;
        p{
            font-size: 24px;
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