import styled from "styled-components";

const Container = styled.footer`
    width: 100%;
    background-color: #00843F;
    display: flex;
    justify-content: space-between;
    padding: 68px 128px;
    color: white;
    nav{
        display: flex;
    }
    span{
        font-size: 18px;
        font-weight: 500;
        padding: 10px;
    }
    .appstores{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
`

export { Container }