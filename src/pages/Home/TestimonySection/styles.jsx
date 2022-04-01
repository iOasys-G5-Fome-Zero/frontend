import styled from "styled-components";

const Container = styled.section`
    margin: 50px 0px;
    width: 100%;
    display: flex;
    gap: 40px;
    .quotes {
        align-self: stretch;
        margin-top: 150px;
        img{
            width: 100px;
        }
    }
    .left-testimonies {
        flex-grow: 1;
        h1 {
            font-size: 40px;
            margin-bottom: 30px;
        }
    }
    .right-testimonies {
        flex-grow: 1;
    }
`

export { Container }