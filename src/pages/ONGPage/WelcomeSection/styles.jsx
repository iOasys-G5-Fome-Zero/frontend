import styled from "styled-components";

const Container = styled.section`
    display: flex;
    justify-content: space-between;
    padding-top: 120px;
    padding-bottom: 120px;
    p{
        font-size: 24px;
    }
    .left{
        display: flex;
        flex-direction: column;
        gap: 50px;
        width: 45%;
    }
`

export { Container }