import styled from "styled-components";

const Container = styled.section`
    margin: 50px 0px;
    width: 100%;
    max-width: 100%;
    display: flex;
    gap: 30px;
    .quotes {
        margin-top: 150px;
        img{
            width: 100px;
        }
    }
    .left-testimonies {
        flex-grow: 1;
    }
    .right-testimonies {
        flex-grow: 1;
    }
    
    @media(max-width: 900px){
        flex-direction: column;
        .quotes{
            display: none;
        }
        h2{
            text-align: center;
            font-size: 24px;
        }
        .right-testimonies{
            margin-top: -20px;
        }
    }
`

export { Container }